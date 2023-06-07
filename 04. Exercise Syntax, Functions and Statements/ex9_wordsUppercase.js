function wordsUppercase(text){
    return words = text.match(new RegExp(/\w+/g)).join(", ").toUpperCase();
}

console.log(wordsUppercase("Hi, how are you?"));
// HI, HOW, ARE, YOU
console.log(wordsUppercase("hello"));
// HELLO