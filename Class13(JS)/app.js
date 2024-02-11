// let str = 'hello world!';
// let str2 = new String("Hello World 2");
// let name = 'Malik M Jahangir';
// let str3 = `My name is ${name}`;
// console.log(str, str2, str3.length);


// escape characters
// let str2 = "Devtrio student\"s \\";
// let lineBreak =  'Malik \n M \n Jahangir';
// console.log(lineBreak);


// let message = 'we all are learning javascript';
// console.log(message.indexOf("are"));
// console.log(message.indexOf("a", 4));

// let fruit = 'banana';
// console.log(fruit.lastIndexOf("a"));


/////////////////////////////////
// let ext = 'Apple Banana Mango';
// console.log(ext.slice(0,5));
// console.log(ext.slice(0,-6));
// console.log(ext.slice(6));

// console.log(ext.substring(0, 5));


/////////////////////////////
// not change original string.
// give new change string..
// let a = 'Malik Muhammad Jahangir';
// let b = a.replace("Muhammad", "M");

// console.log(a, '\n' ,b);


//////////////////////////////
// ASCII
// let charStr = 'Devtrio';
// console.log(charStr.charAt(3));

// let str = 'Malik';
// console.log(str.charCodeAt(0));



///////////////////////////////
//ES=5 2009 allow [] to acces string...
// let strx = 'hello world!';
// console.log(strx[0]);


////////////////////////////////
// let name = 'Owais Ahmed';
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// let n = 'ashar';
// let cap = n.charAt(0).toLocaleUpperCase()+n.slice(1);
// console.log(cap);

// let str1 = 'malik';
// let str2 = 'jahangir';
// let fullname = str1.concat(" ",str2)
// console.log(fullname);
// console.log(`${str1} ${str2}`);



///////////////////////////////

// let str2 = ' malik ';
// let str4 = '   malik jahangir ';

// console.log(str2.trim());
// console.log(str4.trim());



//////////////////////////////////

// let studentName = "Rafay, Luqman, Asim, Nida";

// let nameArr = studentName.split(", ");
// console.log(nameArr.join(", "));


///////////////////////////////

// let message = "ahmed ashar";

// let breakMessageWords = message.split(" ");


// for (let i = 0; i < breakMessageWords.length; i++) {

//    let capWord = breakMessageWords[i].charAt(0).toLocaleUpperCase()+breakMessageWords[i].slice(1);

//    breakMessageWords[i] = capWord; 
// }

// message = breakMessageWords.join(" ");
// console.log(message);



// ////////////////////////////////////////////////////
//   Date n Time....
// ///////////////////////////////////////////////////

// let date = new Date();
// console.log(date);
// console.log(date.toLocaleString());


// /////////////////////////


// let d = new Date(2025, 0, 24, 3, 30, 30);
// console.log(d);


///////////////////////////
// from 1st Jan 1970 to now
// console.log(Date.now());


// //////////////////////////


// let d = new Date("October 13, 2024, 11:01:00")
// console.log(d);


////////////////////////////

// let my_date =  new Date();

// my_date.setFullYear(2026)
// my_date.setMonth(10)
// my_date.setDate(10)
// console.log(my_date);


// console.log(my_date.getFullYear());
// console.log(my_date.getMonth());
// console.log(my_date.getDate());


// console.log(my_date.setHours(5));
// console.log(my_date.setMinutes(30));
// console.log(my_date.setSeconds(40));
// console.log(my_date.setMilliseconds(0));


// console.log(my_date);


// console.log(my_date.getHours(5));
// console.log(my_date.getMinutes(30));
// console.log(my_date.getSeconds(40));
// console.log(my_date.getMilliseconds(0));



////////////////////////////////////



// console.log(new Date().toLocaleString());
// console.log(new Date().toLocaleDateString());
// console.log(new Date().toLocaleTimeString());




// ////////////////////////////////////////////////////

// Math function...


// console.log(Math.PI);


// let number = 10.80;
// console.log(Math.round(number));

// console.log(Math.ceil(number));
// console.log(Math.floor(number));


// console.log(Math.pow(2,3),  2**3);



// sqrt

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(27).toFixed(2));


// trunc (return integer part of function....)


// console.log(Math.trunc(4.5));
// console.log(Math.trunc(-4.5));


////////////////////////////////


// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*100));