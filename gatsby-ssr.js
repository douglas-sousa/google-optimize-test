const React = require('react');
exports.onRenderBody = ({ setHeadComponents }) => {
  if (process.env.NODE_ENV === 'production') {
    setHeadComponents([
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-174228191-1"></script>,
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-174228191-1', { 'optimize_id': 'OPT-MTS3K2S' });
         `
        }}
      />
    ])
  }
}