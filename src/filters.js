const jpeg = require('jpeg-js');
const { Color } = require('./color.js');
const { Pixel } = require('./pixel');
const { Position } = require('./position');

const calcOrdinate = (index, width) => Math.floor(index / width);

const calcAbscissa = (index, width) => index % width;

const partPixels = ({ width, data }) => {
  const pixels = [];

  for (let index = 0; index < data.length; index += 4) {
    const colorBuffer = data.slice(index, index + 4);
    const color = new Color(...colorBuffer);

    const abscissa = calcAbscissa(index, width);
    const ordinate = calcOrdinate(index, width);

    const position = new Position(abscissa, ordinate);

    pixels.push(new Pixel(color, position));
  }

  return pixels;
};

const filterImage = (image) => {
  const decodedImage = jpeg.decode(image);
  const pixels = partPixels(decodedImage);

  pixels.forEach(pixel => pixel.unsetBlue());
  decodedImage.data = pixels.flatMap(pixel => pixel.toArray());

  return jpeg.encode(decodedImage);
};

module.exports = { filterImage };
