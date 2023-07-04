const str = "Hello World!";

let reverse = "";

function reverse_str(text) {
  for (let i = text.length - 1; i >= 0; i--) {
    reverse += text[i];
  }

  return reverse;
}

console.log(reverse_str(str));
