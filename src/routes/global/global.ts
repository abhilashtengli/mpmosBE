import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";
import express, { Request, Response } from "express";

const globalRouter = express.Router();



