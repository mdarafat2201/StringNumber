const counter = document.querySelectorAll(".counter");
let counterArr = Array.from(counter);

/*let count = 0;
let stop = setInterval(() => {
  count++;
  console.log(count);
  if (count >= 10) {
    clearInterval(stop);
  }
}, 1000);*
counterArr.map((e) => {
  let counterValue = e.innerHTML;
  let count = 0;
  function counterUp() {
    e.terget.value = count;
    count++;
  }
  const stop = setInterval(() => {
    if (count >= counterValue) {
      clearInterval(stop);
    }
    counterUp();
  }, 100000);
});
