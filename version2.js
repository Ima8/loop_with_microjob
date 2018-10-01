console.time('test');
(async () => {

  try {
    // this function will be executed in another thread
    let i = new Promise((resolve, reject) => {
        let sum = 0
        for (let i = 10000000000; i > 0; i--) {
          sum += i
        }
        resolve(sum)
      });

    

    let j = new Promise((resolve, reject) => {
        let sum2 = 0
        for (let j = 0; j < 10000000000; j++) {
          sum2 += j
        }
        resolve(sum2)
      });
    
    await Promise.all([i, j]).then(function (values) {
      console.log(values);
    });
  } catch (err) {
    console.error(err)
  }


  console.timeEnd('test');
})()
