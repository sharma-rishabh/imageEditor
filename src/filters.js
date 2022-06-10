const jpeg = require('jpeg-js');

const decode = (image) => jpeg.decode(image);
const encode = (decodedImage) => jpeg.encode(decodedImage);

const cyan = (decodedImage) => {
  return decodedImage.map(
    (pixel, index) => index % 4 === 0 ? 0 : pixel);
};

const filterImage = (image) => {
  const decodedImage = decode(image);
  decodedImage.data = cyan(decodedImage.data);

  return encode(decodedImage);
};

module.exports = { filterImage };
