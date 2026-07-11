let a="hello";
let b='world';
let c=`hello world`;//template Literal
//String banane ke 3 tareeke
//``(backtick)ka fayda ye hai ki isme string interpolation aur multline string likh sakte hai
let name ="Sumit";
console.log(`hello ${name}`);
//output hellosumit
// imp string properties
let str="javaScript";
console.log(str.length); //output 10
//imp string method
console.log(str.toUpperCase(str));
console.log(str.toLowerCase(str));
console.log(str.trim(str)); // Aage piche ke extra spaces hata deta hai
console.log(str.slice(0,4));
console.log(str.substring(4,10));
console.log(str.replace("java","Type")); //TypeScript
console.log(str.includes("Script")); //true
console.log(str.startsWith("java")); //true
console.log(str.endsWith("pt")); // true
console.log(str.indexOf("S")); //4
console.log(str.charAt(0));

//String Concatenation
let first="hello";
let second="world";
console.log(first +" "+ second);
//ye template literal
console.log(`${first} ${second}`);

//Dhyan rakhne wali baat
//javaScript me String immutable hoti hai ,yani 
//original value change nhi hoti
let str1="hello";
str1.toUpperCase();
console.log(str1); //hello

//Agar badli hui value chahiye;
str1=str1.toUpperCase();
console.log(str); //HELLO

