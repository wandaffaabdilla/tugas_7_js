console.log("==============Perulangan Biasa===============");
var tinggiBadan = [
  "167cm",
  "180cm",
  "185cm",
  "160cm",
  "165cm",
  "170cm",
  "192cm",
  "175cm",
  "172cm",
  "188cm",
];

for (var x = 0; x < tinggiBadan.length; x++) {
  console.log(tinggiBadan[x]);
}

console.log("");
console.log("");
console.log("==============Perulangan While===============");
var tinggiBadan = [
  "167cm",
  "180cm",
  "185cm",
  "160cm",
  "165cm",
  "170cm",
  "192cm",
  "175cm",
  "172cm",
  "188cm",
];

var y = 0;
while (y < tinggiBadan.length) {
  console.log(tinggiBadan[y]);
  y++;
}

console.log("");
console.log("");
console.log("=============Perulangan Do While=============");
var tinggiBadan = [
  "167cm",
  "180cm",
  "185cm",
  "160cm",
  "165cm",
  "170cm",
  "192cm",
  "175cm",
  "172cm",
  "188cm",
];
var z = 0;
do {
  console.log(tinggiBadan[z]);
  z++;
} while (z < tinggiBadan.length);

console.log("");
console.log("");
console.log("===================For Of====================");
var tinggiBadan = [
  "167cm",
  "180cm",
  "185cm",
  "160cm",
  "165cm",
  "170cm",
  "192cm",
  "175cm",
  "172cm",
  "188cm",
];

for (let i of tinggiBadan) {
  console.log(i);
}
