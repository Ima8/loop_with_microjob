console.time('test');

try {
  // this function will be executed in another thread

  let sum = 0
  for (let i = 10000000000; i > 0; i--) {
    sum += i
  }

  let sum2 = 0
  for (let j = 0; j < 10000000000; j++) {
    sum2 += j
  }
  console.log("sum", sum);
  console.log("sum2", sum2);
  console.timeEnd('test');
} catch (err) {
  console.error(err)
}

