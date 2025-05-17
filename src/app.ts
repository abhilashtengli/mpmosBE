import express from "express";

const app = express();
app.use(express.json());
app.listen(process.env.PORT, async () => {
    // console.log("Server running on the port : ", process.env.PORT);
  });