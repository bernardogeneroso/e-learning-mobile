import path from "path";
import crypto from "crypto";
import multer, { StorageEngine } from "multer";

const uploadsFolder = path.resolve(__dirname, "..", "..", "uploads");

interface IUploadConfig {
  uploadsFolder: string;

  multerStorageImageCourses: {
    storage: StorageEngine;
  };
}

export default {
  uploadsFolder,

  multerStorageImageCourses: {
    storage: multer.diskStorage({
      destination: path.resolve(uploadsFolder, "courses"),
      filename: (request, file, callback) => {
        const fileHash = crypto.randomBytes(10).toString("hex");
        const fileName = `${fileHash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },
} as IUploadConfig;
