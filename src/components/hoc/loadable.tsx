import React from 'react';
import Spinner from '../../components/Spinner';

export const loadable = (loading: boolean) => <P extends object>(
  Component: React.ComponentType<P>
) =>
  class WithLoading extends React.Component<P> {
    render() {
      return loading ? <Spinner /> : <Component {...(this.props as P)} />;
    }
  };
