
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const timer = function(){
rl.question("When you want that timer dude? ", (answer) => {
  if(answer === 'b'){
    setTimeout(() => {process.stdout.write('\x07');}, 0);
    setTimeout(() => timer(), (answer+500));
  }
  if (parseInt(answer) < 10){
    console.log(`Setting that timer for ${answer} seconds Big Dawg...`)
    setTimeout(() => {process.stdout.write('\x07');}, (parseInt(answer)*1000));
    setTimeout(() => timer(), (answer+500));
  }
})
rl.on('SIGINT', () => {
  console.log(`\nCya big guy`)
  rl.pause();
});

}


timer()