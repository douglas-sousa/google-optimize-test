import React from 'react';

import { Button } from '@/components';

import css from './style.module.css';

type Props = {
  message: string;
}

export default function SubHeading(props: Props): JSX.Element {
  return (
    <div className={css.container}>
      <h2>Subtítulo dentro de componente (deve atualizar)</h2>
      <p>{props.message}</p>
      <Button mode="dark">
        Componente botão dentro de outro componente (deve atualizar)
      </Button>
    </div>
  );
}
