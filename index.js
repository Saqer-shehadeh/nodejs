import express from 'express';
import * as rout from './rout.js'

const server = express();

rout.init(express,server)

server.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});


