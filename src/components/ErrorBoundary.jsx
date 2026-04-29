import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error Boundary caught an error:', error, errorInfo);
    
    this.setState(prevState => ({
      error,
      errorInfo,
      errorCount: prevState.errorCount + 1,
    }));

    if (import.meta.env.PROD) {
      // TODO: Send to error tracking service (e.g., Sentry)
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.state.errorCount > 3) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-background p-6">
            <div className="max-w-md w-full text-center">
              <AlertTriangle size={48} className="text-destructive mx-auto mb-4" />
              <h1 className="font-heading text-2xl font-bold mb-2">
                Critical Error
              </h1>
              <p className="text-sm text-muted-foreground mb-6">
                The application encountered multiple errors. Please contact support.
              </p>
              <button
                onClick={this.handleReload}
                className="px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors duration-300"
              >
                Reload Application
              </button>
            </div>
          </div>
        );
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-6">
          <div className="max-w-2xl w-full">
            <div className="border border-border p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center border border-destructive">
                  <AlertTriangle size={24} className="text-destructive" />
                </div>
                <div>
                  <h1 className="font-heading text-2xl font-bold">
                    Something Went Wrong
                  </h1>
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Error Code: {this.state.error?.name || 'UNKNOWN'}
                  </p>
                </div>
              </div>

              <div className="mb-6 p-4 bg-card border border-border">
                <p className="font-mono text-xs text-foreground/80 mb-2">
                  {this.state.error?.message || 'An unexpected error occurred'}
                </p>
                {import.meta.env.DEV && this.state.errorInfo && (
                  <details className="mt-4">
                    <summary className="font-mono text-xs text-muted-foreground cursor-pointer hover:text-foreground">
                      Stack Trace (Development Only)
                    </summary>
                    <pre className="mt-2 text-[10px] text-muted-foreground overflow-auto max-h-40 p-2 bg-background">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={this.handleReset}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors duration-300"
                >
                  <RefreshCw size={14} />
                  Try Again
                </button>
                <button
                  onClick={this.handleGoHome}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300 font-mono text-xs uppercase tracking-wider"
                >
                  <Home size={14} />
                  Go Home
                </button>
                <button
                  onClick={this.handleReload}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-muted-foreground hover:text-foreground transition-colors duration-300 font-mono text-xs uppercase tracking-wider"
                >
                  Reload Page
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-mono text-[10px] text-muted-foreground">
                  If this problem persists, please contact support at{' '}
                  <a
                    href="mailto:kekopistreet@gmail.com"
                    className="text-primary hover:underline"
                  >
                    kekopistreet@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
