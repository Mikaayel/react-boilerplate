import { renderToString } from 'react-dom/server';
// import React from 'react';
export default (renderMe) => `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>React Boilerplate</title>
    </head>
    <body>
        <div id="root">${renderToString(renderMe)}</div>
        <script src="/static/client.js"></script>
    </body>
</html>`;
