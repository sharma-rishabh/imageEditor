const jpeg = require('jpeg-js');

const decode = (image) => jpeg.decode(image);
const encode = (decodedImage) => jpeg.encode(decodedImage);

const applyFilter = (decodedImage, filterName) => decodedImage.map(filterName);

const findPosition = (position) => position % 4;

const isRed = (position) => findPosition(position) === 0;
const isGreen = (position) => findPosition(position) === 1;
const isBlue = (position) => findPosition(position) === 2;

const unsetRed = (pixel, position) => isRed(position) ? 0 : pixel;
const unsetGreen = (pixel, position) => isGreen(position) ? 0 : pixel;
const unsetBlue = (pixel, position) => isBlue(position) ? 0 : pixel;

const filters = {
  cyan: (pixel, position) => unsetRed(pixel, position),
  magenta: (pixel, position) => unsetGreen(pixel, position),
  yellow: (pixel, position) => unsetBlue(pixel, position),
  // red: (pixel, index) => index % 4 === 1 ? 0 : pixel,
};

const filterImage = (image, filter) => {
  const decodedImage = decode(image);
  decodedImage.data = applyFilter(decodedImage.data, filters[filter]);

  return encode(decodedImage);
};

module.exports = { filterImage };

// const pixel = [100, 100, 200, 1];

// const unSetRed = ([r, g, b, a]) => [0, g, b, a];