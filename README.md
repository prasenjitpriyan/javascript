# ⚙️ FULL ERROR HANDLING OUTLINE (Next.js + Tailwind)

---

## 🧩 1. Folder structure

```
app/
│
├── layout.jsx
├── page.jsx
├── error.jsx               ← Route-level error boundary (optional per route)
├── global-error.jsx        ← App-wide error boundary (required for global fallback)
│
└── components/
    ├── GlobalErrorContext.jsx
    ├── GlobalErrorToast.jsx
    └── ErrorBoundary.jsx   ← Optional custom boundary for components
```

---

## 🧱 2. `app/error.jsx` — Route-level error boundary

> Catches rendering errors **only in this route**.
> Automatically receives `{ error, reset }` from Next.js.

```jsx
'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Route Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Something went wrong 😕
        </h2>
        <p className="text-gray-600 mb-6">
          {error?.message || 'An unexpected issue occurred in this page.'}
        </p>
        <button
          onClick={() => reset()}
          className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition active:scale-95">
          Try again
        </button>
      </div>
    </div>
  );
}
```

✅ **Features**

- Simple recovery (`reset()` re-renders route)
- Tailwind styling for clean layout
- Minimal, non-blocking fallback

---

## 🌍 3. `app/global-error.jsx` — App-wide boundary

> Catches **uncaught errors** across your whole app.
> Must include `<html>` and `<body>` in return.

```jsx
'use client';

export default function GlobalError({ error, reset }) {
  console.error('Global Error:', error);

  return (
    <html>
      <body className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-lg text-center border border-gray-700">
          <h2 className="text-3xl font-semibold mb-3">⚠️ Application Error</h2>
          <p className="text-gray-300 mb-5">
            {error?.message ||
              'A critical error has occurred. Please reload the app.'}
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition active:scale-95">
            Reload App
          </button>
        </div>
      </body>
    </html>
  );
}
```

✅ **Features**

- Handles **global** uncaught errors (including layout crashes)
- Styled distinctly (dark theme)
- Encourages full reload rather than just retry

---

## 🌐 4. Global Error Context (optional but recommended)

> For **non-crashing errors**, like API or validation issues — you don’t want to break the whole page.

`components/GlobalErrorContext.jsx`:

```jsx
'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const GlobalErrorContext = createContext();

export function GlobalErrorProvider({ children }) {
  const [errors, setErrors] = useState([]);

  const push = useCallback((message, meta) => {
    const id = Date.now() + Math.random();
    setErrors((prev) => [{ id, message, meta }, ...prev]);
  }, []);

  const dismiss = useCallback((id) => {
    setErrors((prev) => prev.filter((e) => e.id !== id));
  }, []);

  return (
    <GlobalErrorContext.Provider value={{ errors, push, dismiss }}>
      {children}
    </GlobalErrorContext.Provider>
  );
}

export const useGlobalError = () => useContext(GlobalErrorContext);
```

---

## 💬 5. Global Error Toasts

`components/GlobalErrorToast.jsx`:

```jsx
'use client';

import { useGlobalError } from './GlobalErrorContext';

export function GlobalErrorToast() {
  const { errors, dismiss } = useGlobalError();

  if (!errors.length) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-3">
      {errors.map((e) => (
        <div
          key={e.id}
          className="bg-red-50 border border-red-200 text-red-700 rounded-lg shadow-md p-4 max-w-sm w-full">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold">Error</p>
              <p className="text-sm">{e.message}</p>
              {e.meta && (
                <pre className="text-xs mt-2 bg-white p-2 rounded text-gray-600 overflow-auto">
                  {JSON.stringify(e.meta, null, 2)}
                </pre>
              )}
            </div>
            <button
              onClick={() => dismiss(e.id)}
              className="text-xs bg-white px-2 py-1 rounded-md border hover:bg-gray-100">
              Close
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

## 🧠 6. Wrap your layout with the provider

`app/layout.jsx`:

```jsx
import './globals.css';
import { GlobalErrorProvider } from '@/components/GlobalErrorContext';
import { GlobalErrorToast } from '@/components/GlobalErrorToast';

export const metadata = {
  title: 'My Next.js App',
  description: 'Error-handling setup demo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalErrorProvider>
          {children}
          <GlobalErrorToast />
        </GlobalErrorProvider>
      </body>
    </html>
  );
}
```

---

## 🧩 7. Example usage of GlobalError

```jsx
'use client';

import { useGlobalError } from '@/components/GlobalErrorContext';

export default function Example() {
  const { push } = useGlobalError();

  async function handleClick() {
    try {
      // simulate API error
      throw new Error('Failed to fetch user data');
    } catch (err) {
      push(err.message, { endpoint: '/api/user' });
    }
  }

  return (
    <div className="p-8">
      <button
        onClick={handleClick}
        className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
        Trigger Error Toast
      </button>
    </div>
  );
}
```

---

## 🎨 8. Tailwind styling notes

- **Colors:**

  - Route errors → Light background (`bg-gray-50`)
  - Global errors → Dark background (`bg-gray-900`)
  - Toasts → Subtle red (`bg-red-50`, `border-red-200`)

- **Consistency:** use rounded-xl, shadow-lg, and transitions
- **Accessibility:**

  - Add `role="alert"` to toasts
  - Keep focus on retry buttons when possible

---

## 🔧 9. Optional custom ErrorBoundary (component-level)

If you want to catch errors **within components** (not route-level):

`components/ErrorBoundary.jsx`:

```jsx
'use client';
import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <p>Component failed to render.</p>
          <p className="text-sm">{this.state.error.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
```

Use:

```jsx
<ErrorBoundary>
  <Widget />
</ErrorBoundary>
```

---

## ✅ Final Summary

| Scope            | File                                             | Purpose                           | Recovery          |
| ---------------- | ------------------------------------------------ | --------------------------------- | ----------------- |
| **Component**    | `ErrorBoundary.jsx`                              | Catches component crashes         | Manual            |
| **Route**        | `app/error.jsx`                                  | Handles route-level render errors | `reset()`         |
| **Global**       | `app/global-error.jsx`                           | Handles entire app crashes        | `reset()` reloads |
| **Toast System** | `GlobalErrorContext.jsx`, `GlobalErrorToast.jsx` | Shows recoverable API/UI errors   | Dismiss button    |

---

Would you like me to give you a **ready-made “/components/errors” folder zip** (with all these files structured and styled together)? I can generate it so you can drop it into your project directly.

## 🧩 What is an `<ErrorBoundary>`?

An **Error Boundary** is a React component that **catches JavaScript errors** _in its child components’ rendering phase_ (and lifecycle methods), preventing the **entire app from crashing**.

It’s like a “try-catch” for React UI.

---

## 🔍 When to use it

Use `<ErrorBoundary>` **around risky components** — ones that may fail due to:

- API data issues (e.g., bad response, null values)
- Third-party widgets
- Dynamically loaded components
- Experimental / unstable features

Example:

```jsx
<ErrorBoundary>
  <UserProfile userId={id} />
</ErrorBoundary>
```

If `UserProfile` crashes while rendering (say, due to `user.name` being `undefined`),
the error is caught and a friendly fallback UI is shown — _not a blank white screen._

---

## 🧱 1. Example ErrorBoundary component

```jsx
'use client';
import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('Error caught by boundary:', error, info);
    // Optionally log to monitoring service (Sentry, LogRocket, etc.)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center">
          <h2 className="font-semibold mb-2">Component Error</h2>
          <p className="text-sm mb-4">{this.state.error?.message}</p>
          <button
            onClick={this.handleReset}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

---

## 🧠 2. How to use it

Here’s the basic usage syntax:

```jsx
import { ErrorBoundary } from '@/components/ErrorBoundary';
import Widget from '@/components/Widget';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <ErrorBoundary>
        <Widget />
      </ErrorBoundary>

      <ErrorBoundary>
        <AnotherWidget />
      </ErrorBoundary>
    </div>
  );
}
```

### 🔹 Explanation:

- Each `ErrorBoundary` **isolates** errors to its child.
- If `<Widget />` crashes, it won’t affect `<AnotherWidget />` or the rest of the page.
- You can show fallback UI like “Something went wrong in this widget.”

---

## 🎨 3. Optional: Custom fallback UI

You can pass a custom fallback component for flexibility.

```jsx
function Fallback({ error, reset }) {
  return (
    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
      <p className="text-yellow-700">Oops! {error.message}</p>
      <button onClick={reset} className="text-sm text-yellow-600 underline">
        Retry
      </button>
    </div>
  );
}

<ErrorBoundary fallback={<Fallback />}>
  <Widget />
</ErrorBoundary>;
```

---

## ⚡ 4. What errors are caught?

✅ Caught:

- Rendering errors in React components
- Errors in lifecycle methods
- Errors in constructors of child components

❌ Not caught:

- Asynchronous errors (e.g., in `fetch`, `setTimeout`)
- Event handler errors (you handle those with try-catch manually)
- Errors outside the React tree

Example:

```js
try {
  await fetch('/api');
} catch (err) {
  // Handle manually or via GlobalErrorContext
}
```

---

## 🔧 5. Combining with Next.js `error.jsx`

| Level         | File                   | Purpose                    |
| ------------- | ---------------------- | -------------------------- |
| **Component** | `<ErrorBoundary>`      | Local errors (small scope) |
| **Route**     | `app/error.jsx`        | Page-level errors          |
| **Global**    | `app/global-error.jsx` | Entire app fallback        |

You can nest them safely.
Example:

```jsx
<ErrorBoundary>
  <Suspense fallback={<Loading />}>
    <PageContent />
  </Suspense>
</ErrorBoundary>
```

---

## 🪄 6. Real-world example

Imagine a dashboard with multiple independent widgets:

```jsx
export default function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      <ErrorBoundary>
        <WeatherWidget />
      </ErrorBoundary>

      <ErrorBoundary>
        <StockWidget />
      </ErrorBoundary>

      <ErrorBoundary>
        <NewsWidget />
      </ErrorBoundary>
    </div>
  );
}
```

If `StockWidget` fails (e.g., API error or undefined data),
only its tile shows an error message — the rest continue to work.

---

## ✅ Summary

| Concept            | Description                            |
| ------------------ | -------------------------------------- |
| `<ErrorBoundary>`  | A React “try-catch” for UI rendering   |
| Placement          | Around risky or isolated components    |
| Benefit            | Prevents app crashes, improves UX      |
| `error.jsx`        | Next.js built-in route boundary        |
| `global-error.jsx` | App-wide error fallback                |
| Together           | You can mix all for layered protection |

---

Would you like me to show a **real example** where `ErrorBoundary` catches a failure in a mock component (like a broken `Widget`)? I can write that out so you can see the behavior clearly.
