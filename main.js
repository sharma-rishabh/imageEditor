const fs = require('fs');
const { filterImage } = require('./src/filters.js');

const readImage = (path) => fs.readFileSync(path);
const writeImage = (path, imageData) => fs.writeFileSync(path, imageData);

const main = () => {
  const image = readImage('./test/testData/sunrise.jpeg');
  const filteredImage = filterImage(image, 'yellow');

  writeImage('./filteredSunrise.jpeg', filteredImage.data);
};

main();
