import React, { useState, useEffect } from 'react';

import css from './style.module.css';

const DEFAULT_TITLE = 'Título não estático';
export default function Form(): JSX.Element {
  const [title, setTitle] = useState(DEFAULT_TITLE);
  const [state, setState] = useState({
    name: '',
    age: '',
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target as HTMLInputElement;
    setState((oldstate) => ({
      ...oldstate,
      [name]: value,
    }));
  }

  useEffect(() => {
    if (!state.age && !state.name) return setTitle(DEFAULT_TITLE);

    setTitle(`Nome: ${state.name} & Idade: ${state.age}`);
  }, [state]);

  return (
    <div className={css.container}>
      <h3>Título estático (deve atualizar)</h3>
      <h4>{title}</h4>
      <form>
        <input type="text" placeholder="nome" name="name" onChange={handleInputChange} />
        <input type="text" placeholder="idade" name="age" onChange={handleInputChange} />
      </form>
    </div>
  );
}
