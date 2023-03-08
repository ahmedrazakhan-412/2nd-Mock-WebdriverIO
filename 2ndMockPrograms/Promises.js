async function sync() {
   
var p = new Promise(function (resolve, reject) {
    var x = 0;
    var y = 0;
    if (x === y) {
        resolve();
        reject();
    }
})
await p.then(function() { console.log("Data same");}).catch(function() { console.log("Not Matched");})

}

sync();