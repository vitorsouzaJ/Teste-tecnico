import express from "./config/express";
import http from "http";

const app = http.createServer(express);

const server = app.listen(3000, () =>
  console.log(`Server running at: http://localhost:3000`)
);

export default server;
