import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";
import { deleteContent } from "@services/Cloudflare/cloudflare";
import { generateFormattedId } from "@services/general";

import express, { Request, Response } from "express";

const ActivityRouter = express.Router();
