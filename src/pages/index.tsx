import React from "react";
import { Link } from "gatsby";

import '@/assets/style/pages/home.css';

export default function Home(): JSX.Element {
  return (
    <div id="home">
      <h1>Página principal</h1>
      <Link to="/cta">Ir para página de CTA</Link>
    </div>
  );
}
