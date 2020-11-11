import React, { useEffect, useState } from 'react';

import { SubHeading, Button, Form, Footer, Loading } from '@/components';

import '@/assets/style/pages/landing-page.css';
import skyImage from '@/assets/image/sky.jpeg';

declare var window: {
  dataLayer: { event: string; }[];
  addEventListener: (event: string, cb: Function) => void;
};

export default function LandingPage(): JSX.Element {
  const [loaded, setLoaded] = useState(false);

  function loadOptimize(): void {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'optimize.activate' });
    setLoaded(true);
  }

  function deleteCookie(name: string): void {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  useEffect(() => {
    loadOptimize();

    window.addEventListener('beforeunload', () => deleteCookie('_gaexp'));
    window.addEventListener('pagehide', () => deleteCookie('_gaexp'));
  }, []);

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