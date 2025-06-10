import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth";
import galleryRouter from "./routes/gallery";
import projectDetailsRouter from "./routes/projectdetails";
import publicationRouter from "./routes/publication";
import upcomingEventsRouter from "./routes/upcomingevents";
import awarenessProgramRouter from "./routes/eprogress/awarnessprogram";
import fldRouter from "./routes/eprogress/fld";
import infrastructureRouter from "./routes/eprogress/infradevelopment";
import inputDistributionRouter from "./routes/eprogress/inputdistribution";
import projectRouter from "./routes/eprogress/project";
import trainingRouter from "./routes/eprogress/training";
import sseRouter from "./routes/sseRoute";
const app = express();
app.use(cookieParser());

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
  })
);
app.use("/", authRouter);
app.use("/", sseRouter);
//content
app.use("/", galleryRouter);
app.use("/", projectDetailsRouter);
app.use("/", publicationRouter);
app.use("/", upcomingEventsRouter);
//e-progress
app.use("/", awarenessProgramRouter);
app.use("/", fldRouter);
app.use("/", infrastructureRouter);
app.use("/", inputDistributionRouter);
app.use("/", projectRouter);
app.use("/", trainingRouter);
app.listen(process.env.PORT, async () => {
  // console.log("Server running on the port : ", process.env.PORT);
});
