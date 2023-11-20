import React from 'react';
import Spinner from '../../components/Spinner';

type WrappedComponentProps<P> = React.ComponentClass<P> | React.FC<P>;

type HOCComponent = <P>(
  loading: boolean | ((p: P) => boolean)
) => (C: WrappedComponentProps<P>) => React.FC<P>;

export const loadable: HOCComponent = loading => C => props =>
  loading ? <Spinner /> : <C {...props} />;
