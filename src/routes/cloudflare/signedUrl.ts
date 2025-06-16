import { userAuth } from "@middleware/auth";
import { generatePresignedUrl } from "@services/Cloudflare/cloudflare";
import express, { Request, Response } from "express";

const signedUrlRouter = express.Router();

signedUrlRouter.post(
  "/getSigned-url",
  userAuth,
  async (req: Request, res: Response) => {
    if (!req.body || !req.body.fileName || !req.body.contentType) {
      res.status(400).json({
        message: "Missing filename or content-Type",
        code: "INVALID"
      });
      return;
    }
    const { fileName, contentType } = req.body;
    const { signedUrl, key, publicUrl } = await generatePresignedUrl(
      fileName,
      contentType
    );

    res.json({ signedUrl, publicUrl, key });
    return;
  }
);

export default signedUrlRouter;
