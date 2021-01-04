(() => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const ms = 5000;
    const dataTarget = counter.getAttribute("data-target");
    const perMs = dataTarget / 750;
    let rawVal = 0;
    counter.innerText = rawVal;
    const counterInterval = setInterval(() => {
      if (rawVal >= dataTarget) {
        counter.innerText = new Intl.NumberFormat("en-US").format(
          Math.floor(dataTarget)
        );
      } else {
        rawVal += perMs;
        counter.innerText = new Intl.NumberFormat("en-US").format(
          Math.floor(rawVal)
        );
      }
    }, 1);
    setTimeout(() => clearInterval(counterInterval), ms);
  });
})();
