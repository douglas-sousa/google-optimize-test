import React from 'react';

type Button = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type Props = Button & { mode: 'dark' | 'light' | 'dodo' };

import './style.css';

export default function Button(props: Props): JSX.Element {
  const { mode, ...btnProps } = props;

  return (
    <button {...btnProps} className={`button ${mode}`}>{props.children}</button>
  );
}