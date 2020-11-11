import React from 'react';

import { Spinner } from '@/components';

type Props = {
  children: React.ReactNode;
  ready: boolean;
}

export default function Loading({ children, ready }: Props): JSX.Element {
  return (
    <React.Fragment>
      { ready === false && <Spinner></Spinner> }
      {children}
    </React.Fragment>
  );
}
