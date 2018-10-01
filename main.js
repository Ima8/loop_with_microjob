console.time('test');
(async () => {
  const { job, stop } = require('microjob')

  try {
    // this function will be executed in another thread
    let i = job(() => {
      let sum = 0
      for (let i = 10000000000; i > 0; i--){
        sum +=i
      }
      console.log("return");
      return sum
    })
    
    let j = job(() => {
      let sum2 = 0
      for (let j = 0; j < 10000000000; j++){
        sum2 +=j
      }
      return sum2
    })
    await Promise.all([i, j]).then(function(values) {
      console.log(values);
    });
  } catch (err) {
    console.error(err)
  }

  // graceful shutdown
  stop()
  console.timeEnd('test');
})()
