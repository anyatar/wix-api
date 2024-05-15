import express, { Application } from "express";
import Server from "./src/index";

const app: Application = express();
const server: Server = new Server(app);
const PORT: any = process.env.PORT ?? 5000;

app
  .listen(PORT, '::', function () {
    console.log(`Server is running on port ${PORT}.`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });
