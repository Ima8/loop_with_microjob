console.time('test');
(async () => {
  const { job, stop } = require('microjob')

  try {
    // this function will be executed in another thread
    let i = await job(() => {
      let sum = 0
      for (let i = 10000000000; i > 0; i--){
        sum +=i
      }
      console.log("return");
      return sum
    })
    console.log(i);
    
    let j = await job(() => {
      let sum2 = 0
      for (let j = 0; j < 10000000000; j++){
        sum2 +=j
      }
      return sum2
    })
    console.log(j);
  } catch (err) {
    console.error(err)
  }

  // graceful shutdown
  stop()
  console.timeEnd('test');
})()
