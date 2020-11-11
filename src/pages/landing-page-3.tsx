import React, { useEffect, useState } from 'react';

import { SubHeading, Button, Form, Footer, Loading } from '@/components';

import '@/assets/style/pages/landing-page.css';
import skyImage from '@/assets/image/sky.jpeg';

declare var window: { dataLayer: { event: string; }[]; };
export default function LandingPage(): JSX.Element {
  const [loaded, setLoaded] = useState(false);

  return (
    <Loading ready={loaded}>
      <div id="landing-page">
        <Button mode="light">
          Botão dentro da página
        </Button>
        <h1>Título (deve atualizar)</h1>
        <SubHeading message="Mensagem passada como prop pro subtítulo" />
        <Form />
        <img src={skyImage} alt="sky" height="800px" width="600px"/>
        <Footer message="BRASIL" />
      </div>
    </Loading>
  );
}