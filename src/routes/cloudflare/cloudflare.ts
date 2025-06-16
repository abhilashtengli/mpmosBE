import { userAuth } from "@middleware/auth";
import { deleteContent } from "@services/Cloudflare/cloudflare";
import express, { Request, Response } from "express";

const cloudflareRouter = express.Router();

cloudflareRouter.delete(
  "/delete-file",
  userAuth,
  async (req: Request, res: Response) => {
    const { key } = req.body; // Notice req.params[0] here
    // console.log("Key received:", key);

    const deletionResult = await deleteContent(key);

    if (!deletionResult.success) {
      res.status(500).json({
        message: "Something went wrong",
        error: deletionResult.error,
        Code: "DELETION_FAILED"
      });
      return;
    }

    res.status(200).json({
      message: "Delete successfull",
      success: deletionResult.success,
      code: "DELETE_SUCCESSFULL"
    });
  }
);

export default cloudflareRouter;
