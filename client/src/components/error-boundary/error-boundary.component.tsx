import React, { ErrorInfo, ReactNode } from 'react';
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles';

type State = {
  hasErrored: boolean
}

type Props = {
  children: ReactNode
}

class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasErrored: false
  }

  static getDerivedStateFromError(_: Error): State {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log('Uncaught error', error, info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/O0DCcQy.png'/>
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;