import React from 'react';
import './style.css';

export default function Spinner(): JSX.Element {
  return (
    <div className="container">
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    </div>
  );
}