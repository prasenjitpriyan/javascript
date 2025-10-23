const Home = () => {
  return (
    <main className="min-h-screen flex items-center justify-center transition-colors duration-300 p-6">
      <section className="w-full max-w-md bg-dark-charcoal dark:bg-minion-yellow text-minion-yellow dark:text-dark-charcoal rounded-xl shadow-lg border border-dark-charcoal dark:border-minion-yellow/40 p-8 text-center transition-all duration-300">
        <h1 className="text-3xl font-bold mb-3 tracking-tight">
          Something went wrong!
        </h1>
        <p className="text-sm text-minion-yellow/90 dark:text-dark-charcoal/80 mb-6">
          Oops! An unexpected error occurred. Please try again.
        </p>

        <button
          type="button"
          className="px-6 py-2.5 rounded-lg font-medium bg-minion-yellow dark:bg-dark-charcoal text-dark-charcoal dark:text-minion-yellow shadow-md hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-minion-yellow/80 dark:focus:ring-dark-charcoal/80 transition-all duration-200"
          role="alert">
          Try Again
        </button>
      </section>
    </main>
  );
};

export default Home;
