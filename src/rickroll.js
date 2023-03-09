const opn = require("opn");
const argv = require("minimist")(process.argv.slice(2));

const url = argv.url || "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

const min = argv.min || 60;
const max = argv.max || 600;

function randomInRange(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}
function openImage() {
  const randomTime = randomInRange(min, max);
  setTimeout(() => {
    opn(url);
    openImage();
  }, randomTime * 1000);
}

openImage();
