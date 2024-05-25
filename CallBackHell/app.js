// Cal Back Hell
let h1 = document.querySelector("h1");

function changeColor(color, delay, nextchangeColor) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextchangeColor) {
      nextchangeColor();
    }
  }, delay);
}

changeColor("green", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("Red", 1000, () => {
      changeColor("yellow", 1000, () => {
        changeColor("pink", 1000, () => {
          changeColor("green", 1000);
        });
      });
    });
  });
});
