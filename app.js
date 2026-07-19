import express from "express";
// import { config } from "dotenv";

// config();

const port = 8000;
const app = express();

app.get("/", function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8">
        <title>test</title>
      </head>
      <body>
        <h1>test!</h1>
      </body>
    </html>  
  `);
});

app.listen(port);

app.locals.appTitle = process.env.APPTITLE;
