import express from "express";
import awsRouter from "../modules/aws-media-file/aws.router";

const router = express.Router();

const routes = [
  {
    link: "/aws-media-file",
    route: awsRouter,
  },
];

routes.forEach((item) => router.use(item.link, item.route));

export default router;
