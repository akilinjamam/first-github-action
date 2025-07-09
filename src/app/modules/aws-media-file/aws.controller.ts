import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { awsService } from "./aws.service";

const postAwsMediaFileController = catchAsync(async (req, res) => {
  const result = await awsService.postAwsMediaFileService(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "data url found successfully",
    data: result,
  });
});

export const awsController = {
  postAwsMediaFileController,
};
