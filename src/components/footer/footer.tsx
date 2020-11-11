import React from 'react';

import './style.css';

type Props = {
  message: string;
}

export default function Footer(props: Props): JSX.Element {
  return (
    <div className="footer">
      <h6>Último subtítulo (deve atualizar)</h6>
      <footer>
        Copyright &copy; 2020 - {props.message}
      </footer>
    </div>
  );
}
