import { renderToString } from 'react-dom/server';
export default (renderMe) => `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>React Boilerplate</title>
        <style>body{background-color:#454545}a{color:#a2a2a2,text-decoration:none}.third{width:calc(100%/3)}</style>
    </head>
    <body>
        <div id="root">${renderToString(renderMe)}</div>
        <script src="/dist/client.js"></script>
    </body>
</html>`;
