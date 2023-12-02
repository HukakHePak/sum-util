console.log("Привет. Вставь пример, чтобы посчитать суммы на каждом шаге.");
console.log("Нажми Enter чтобы получить ответ.\n");

process.stdin.resume();
process.stdin.setEncoding("utf8");

let buffer = [];
let lastTime = null;

process.stdin.on("data", (data) => {
  const number = +data.split("\r\n")[0];

  if (number) {
    buffer.push(number);
  } else {
    buffer.reduce((sum, item) => {
      const nextSum = item + sum;

      console.log(`\n${sum}\t ${item >= 0 ? "+" : "-"} ${Math.abs(item)}\t = ${nextSum}`);
      return nextSum;
    }, 0);

    buffer = [];
    console.log("\n\nМожно ввести следующий:\n");
  }
});
