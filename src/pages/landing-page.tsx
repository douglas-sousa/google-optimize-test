import React from 'react';

import { SubHeading, Button, Form } from '@/components';

import '@/assets/style/pages/landing-page.css';

export default function LandingPage(): JSX.Element {
  return (
    <div id="landing-page">
      <Button mode="light">
        Botão dentro da página
      </Button>
      <h1>Título dentro da página</h1>
      <SubHeading message="Mensagem passada como prop pro subtítulo" />
      <Form />
    </div>
  );
}