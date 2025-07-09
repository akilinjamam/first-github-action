import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  port: process.env.PORT,
  node_env: process.env.NODE_ENV,
  aws_region: process.env.AWS_REGION,
  s3_bucket_name: process.env.S3_BUCKET_NAME,
  aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
  aws_access_key: process.env.AWS_SECRET_ACCESS_KEY,
};
