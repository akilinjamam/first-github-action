import express from "express";
import { awsController } from "./aws.controller";
import { upload } from "../../utils/multerUploader";

const awsRouter = express.Router();

awsRouter.post(
  "/create-media-file",
  upload.array("files", 10),
  awsController.postAwsMediaFileController
);

export default awsRouter;
