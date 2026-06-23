import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ info });
    console.error('React Error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          background: '#1a0e06',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 32,
          fontFamily: 'monospace',
        }}>
          <div style={{
            background: '#2a1a0a',
            border: '1px solid #C97A40',
            borderRadius: 16,
            padding: 32,
            maxWidth: 800,
            width: '100%',
          }}>
            <h2 style={{ color: '#C97A40', marginBottom: 12 }}>⚠️ Runtime Error</h2>
            <pre style={{ color: '#f0e8dc', fontSize: 13, whiteSpace: 'pre-wrap', marginBottom: 16 }}>
              {this.state.error?.toString()}
            </pre>
            {this.state.info && (
              <pre style={{ color: '#9a8a7a', fontSize: 11, whiteSpace: 'pre-wrap' }}>
                {this.state.info.componentStack}
              </pre>
            )}
            <button
              onClick={() => window.location.reload()}
              style={{
                marginTop: 16,
                background: '#C97A40',
                color: 'white',
                border: 'none',
                padding: '10px 24px',
                borderRadius: 8,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
