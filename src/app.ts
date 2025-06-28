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
import signedUrlRouter from "./routes/cloudflare/signedUrl";
import cloudflareRouter from "./routes/cloudflare/cloudflare";
import activityRouter from "./routes/eprogress/newActivities/activities";
import activityCategoryRouter from "./routes/eprogress/newActivities/activityCategory";
import generateReportRouter from "./routes/Reports/ProjectReport/projectReportRoute";
import reportRouter from "./routes/Reports/report";
import dashboardRoute from "./routes/eprogress/dashboardRoutes";
import generateCompliedReportRouter from "./routes/Reports/CompiledReport/compliedReportRoute";
import globalRouter from "./routes/global/global";
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
app.use("/", signedUrlRouter);
app.use("/", cloudflareRouter);
//content
app.use("/", globalRouter);
app.use("/", galleryRouter);
app.use("/", projectDetailsRouter);
app.use("/", publicationRouter);
app.use("/", upcomingEventsRouter);
//e-progress

app.use("/", generateCompliedReportRouter);
app.use("/", generateReportRouter);
app.use("/", reportRouter);
app.use("/", dashboardRoute);
app.use("/", awarenessProgramRouter);
app.use("/", fldRouter);
app.use("/", infrastructureRouter);
app.use("/", inputDistributionRouter);
app.use("/", projectRouter);
app.use("/", trainingRouter);
app.use("/", activityRouter);
app.use("/", activityCategoryRouter);
app.listen(process.env.PORT, async () => {
  // console.log("Server running on the port : ", process.env.PORT);
});
