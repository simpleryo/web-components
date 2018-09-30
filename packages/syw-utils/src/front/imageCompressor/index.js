import R from "ramda";
import ImageCompressor from "image-compressor.js/dist/image-compressor.common";

const DEFAULT_COMPRESS_QUALITY_MIN = 0.9;
const DEFAULT_COMPRESS_QUALITY_MAX = 0.5;
const DEFAULT_COMPRESS_SIZE_MIN = 3000000;
const DEFAULT_COMPRESS_SIZE_MAX = 10000000;
const COMPRESS_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const isCompressRequired = ({ size = 0, type }) =>
  R.contains(type, COMPRESS_FILE_TYPES) && size >= DEFAULT_COMPRESS_SIZE_MIN;

const getQualityRatio = (size = 0) => {
  let ratio = DEFAULT_COMPRESS_QUALITY_MAX;
  if (size < DEFAULT_COMPRESS_SIZE_MAX) {
    ratio =
      DEFAULT_COMPRESS_QUALITY_MIN -
      (size - DEFAULT_COMPRESS_SIZE_MIN) /
        (DEFAULT_COMPRESS_SIZE_MAX - DEFAULT_COMPRESS_SIZE_MIN) *
        (DEFAULT_COMPRESS_QUALITY_MIN - DEFAULT_COMPRESS_QUALITY_MAX);
  }
  // console.log("ratio: ", Math.round(ratio * 10) / 10);
  return Math.round(ratio * 10) / 10;
};

export const compress = (file, options = {}) => {
  if (isCompressRequired(file)) {
    const imageCompressor = new ImageCompressor();
    // console.log("before compress: ", file.size / 1000);
    return imageCompressor
      .compress(
        file,
        R.mergeDeepRight(
          {
            quality: getQualityRatio(file.size)
          },
          options
        )
      )
      .then(compressedBlob => {
        const compressedFile = new File([compressedBlob], file.name, {
          type: file.type,
          lastModified: Date.now()
        });
        // console.log("after compress: ", compressedFile.size / 1000);
        if (file.uid) {
          // For Component-Upload, the uid is required after compressed.
          compressedFile.uid = file.uid; // eslint-disable-line no-param-reassign
        }
        return compressedFile;
      });
  }
  return Promise.resolve(file);
};
