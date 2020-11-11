
import React, { useEffect } from 'react';

type Props = {
  children: JSX.Element;
}

declare var window: { dataLayer: { event: string; }[]; };

export default function Layout(props: Props): JSX.Element {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'optimize.activate' });
  }, []);
  
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}
