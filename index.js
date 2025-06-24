const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Hello World</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #121212;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        h1 {
          font-size: 3rem;
          color: #00ffc8;
          text-shadow: 1px 1px 4px #000;
        }
      </style>
    </head>
    <body>
      <h1>Hello World</h1>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

