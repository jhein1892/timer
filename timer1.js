// slice argv into a seperate array, 
// run a set Timeout for each element number, console.log an alarm 

let element = process.argv.slice(2)


const alarm = function(array){
  for (let el in array){ 
    let time = array[el]*1000
    if (Number.isInteger(time)){
    setTimeout(() => {process.stdout.write('\x07');}, time)
  }
}
};


alarm(element)