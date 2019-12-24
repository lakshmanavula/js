
products = [
             {"name":"OnePlus7T","brand":"OnePlus","price":35000},
             {"name":"iPhone10","brand":"Apple","price":85000},
             {"name":"iPhone9","brand":"Apple","price":65000},
             {"name":"Reno2Z","brand":"OPPO","price":25000},
             {"name":"Nokia8","brand":"Nokia","price":15000},
             {"name":"Nokia9","brand":"Nokia","price":25000},
             {"name":"Reno3Z","brand":"OPPO","price":35000},
             {"name":"OnePlus6T","brand":"OnePlus","price":25000},
             {"name":"iPhone11","brand":"Apple","price":95000},
             {"name":"MI2","brand":"MI","price":15000},
           ]

total_price = 0;
// for(let i=0;i<products.length;i++){
//     total_price += products[i].price;

// }
// products.forEach(p => {
//     total_price += p.price;
// });



total_price = products.map(e=>e.price).reduce((a, b) => a + b);
console.log(total_price);

names = products.map(e=>e.name).reduce((a,b)=> a + " "+b);
console.log(names);
brandNames = [];
products.forEach(element => {
    brandNames.push(element.brand);
});
console.log(brandNames);
brandNames = products.map(e=>e.brand);
console.log(brandNames);

names = new Set(brandNames);
console.log(names);
seartStr = "Nokia"
productsByBrand = products.filter(e=>e.brand === seartStr);
console.log(productsByBrand)

p_count = new Map();

for(let p of products){

    let brand = p.brand;

    if(p_count.get(brand)){
        let value = p_count.get(brand) + 1;
        p_count.set(brand,value);
    }else{
        p_count.set(brand,1);
    }

}
console.log(p_count);


players = new Map();

rcb = ["Rahul","ABD","Kohili"]
mi = ["Rohit","Polad","Krish","Sachin"]

players.set("RCB",rcb);
players.set("MI",mi);

rcb_player = players.get("RCB");
rcb_player.push("Dhoni");
players.set("RCB",rcb);

console.log(players);







// result = function(arr, fn){
//     acc = arr[0];
//     for(let i=1;i<arr.length;i++){
//        acc = fn(acc,arr[i]);
//     }
//     return acc;

// }


// arr = [1,2,3,4,5];

// // add = function(a , b ){
// //     return a + b;
// // }

// // mul = function(a , b ){
// //     return a * b ;
// // }
// let sum = result(arr, (a,b)=> a + b);
// let product = result(arr, (a,b)=> a * b);

// console.log(sum);
// console.log(product);