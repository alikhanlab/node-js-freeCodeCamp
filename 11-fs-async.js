const {readFile, writeFile} = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf-8',(err,result) => {
    if(err) {
        console.log(err);
        return
    } else {
        const first = result;
        readFile('./content/second.txt', 'utf-8', (err, result)=> {
            if (err){
                console.log(err);
                return
            } else {
               const second = result;
               console.log('Finished reading')
               writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,
               (err, result) => {
                 if (err) {
                    console.log(err);
                    return
                 } else {
                    console.log('Finished writing');
                 }
               }
               ) 
            }
        })
    }
})
console.log('starting next task')