import React, { useEffect } from "react";
import { Link } from "gatsby";
import { Layout } from '@/components';

import '@/assets/style/pages/home.css';

declare var window: { dataLayer: { event: string; }[]; };

export default function Home(): JSX.Element {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'optimize.activate' });
  }, []);

  return (
    <div id="home">
      <h1>Página principal</h1>
      <Link to="/cta">Ir para página de CTA</Link>
    </div>
  );
}
