// const str = "Hello World!";

// let spilt_arr = str.split(/\W+/);

// let reverse_arr = [];

// //console.log(spilt_arr);

// spilt_arr.forEach((e) => {
//   if (e.length > 0) {
//     let arr = e.split("");

//     arr.reverse();

//     let reverseStr = arr.join("");

//     reverse_arr.push(reverseStr);
//   }
// });

// console.log(reverse_arr.join(" "));

var stringIn = "Hello World!";

//g modifier: global. All matches (don't return on first match)
//i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])

var rev = stringIn.replace(/[a-z]+/gi, function (s) {
  return s.split("").reverse().join("");
});
console.log(rev);
