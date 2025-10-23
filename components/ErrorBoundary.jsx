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
