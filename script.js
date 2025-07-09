let outputDiv = document.getElementById("output");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let num = parseInt(document.getElementById("ip").value.trim());

  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 2000);
  })
    .then((num) => {
      outputDiv.textContent = `Result: ${num}`;
      return num;
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(num * 2);
        }, 1000);
      });
    })
    .then((num) => {
      outputDiv.textContent = `Result: ${num}`;
      return num;
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(num - 3);
        }, 1000);
      });
    })
    .then((num) => {
      outputDiv.textContent = `Result: ${num}`;
      return num;
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(num);
        }, 1000);
      });
    })
    .then((num) => {
      num = num / 2;
      let result = parseFloat(num.toFixed(1)); // Round to 1 decimal
      outputDiv.textContent = `Result: ${result}`;
      return result;
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(num);
        }, 1000);
      });
    })
    .then((num) => {
      num = num + 10;
      outputDiv.textContent = `Result: ${num}`;
    });
});
