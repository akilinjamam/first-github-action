import express from "express";
import { awsController } from "./aws.controller";

const awsRouter = express.Router();

awsRouter.post("/create-media-file", awsController.postAwsMediaFileController);

export default awsRouter;
