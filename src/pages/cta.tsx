import React from "react";
import { Link } from "gatsby";
import { Button, StaticHeader, Layout } from '@/components';

import '@/assets/style/pages/cta.css';

export default function CTA(): JSX.Element {
  return (
    <Layout>
      <div id="cta">
        <h1>Página para CTA</h1>
        <StaticHeader />
        <footer>
          <Button mode="dark">Saiba mais</Button>
          <Link to="/">Volta ao login</Link>
        </footer>
      </div>
    </Layout>
  );
}
