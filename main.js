const fs = require('fs');
const { filterImage } = require('./src/filters.js');

const readImage = (path) => fs.readFileSync(path);
const writeImage = (path, imageData) => fs.writeFileSync(path, imageData);

const main = () => {
  const image = readImage('./filteredSunrise.jpeg');
  const filteredImage = filterImage(image, 'yellow');

  writeImage('./filteredSunrise1.jpeg', filteredImage.data);
};

main();
