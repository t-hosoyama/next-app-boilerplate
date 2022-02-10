import React, { ErrorInfo } from 'react'

export class ErrorBoundary extends React.Component<
  { fallback: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false, error: null }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error)
    console.log(errorInfo)
  }

  render() {
    const { children, fallback } = this.props
    return this.state.hasError ? fallback : children
  }
}
