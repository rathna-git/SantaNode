const fs = require('fs');

fs.readFile('./input.txt', (err,data) => {
  console.time('santa-time:')
  if (err){
    console.log('Errorrrrrrr!');
  }
  const input = data.toString();
  let floor = 0;

//console.log(input.length);

  for(let i = 0; i< input.length; i++){

    //console.log(input[i]);

    if(input[i] === '(') {
      floor ++;
    } else if(input[i] === ')') {
      floor --;
    }
  }
  console.timeEnd('santa-time:');
  console.log(floor);
});
