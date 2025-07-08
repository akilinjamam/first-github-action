import { StatusCodes } from "http-status-codes";
import { TerrorSource } from "../interface/error";
import { ErrorRequestHandler } from "express";
import config from "../config";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next): any => {
  // setting defaul values
  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  let message = "something went wrong";
  let errorMessages: TerrorSource = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  if (err instanceof Error) {
    message = err?.message;
    errorMessages = [
      {
        path: "",
        message: err?.message,
      },
    ];
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.node_env === "development" ? err?.stack : null,
  });
};

export default globalErrorHandler;
