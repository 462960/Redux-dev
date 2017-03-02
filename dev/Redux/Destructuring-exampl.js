// Taken here
// https://rainsoft.io/how-three-dots-changed-javascript/

// Arrays concatination, function arguments from array
let countries = ['Moldova', 'Ukraine'];  
let otherCountries = ['USA', 'Japan'];  
countries.push(...otherCountries);  
console.log(countries); // => ['Moldova', 'Ukraine', 'USA', 'Japan'] 

// Arrays concatination
let cold = ['autumn', 'winter'];
let warm = ['spring', 'summer'];
let otherSeasons = [ ...cold, ...warm];
console.log(otherSeasons);       // => ["autumn", "winter", "spring", "summer"]

//Arrays concatination + extending + variable
var numbers = [1, 2];
var evenNumbers = [4, 8];
const eight = 8;
numbers.push(0, 2, ...evenNumbers, eight);
console.log(numbers); // => [1, 2, 0, 2, 4, 8, 8]

// Extending array
var initial = [0, 1];
var numbers1 = [...initial, 5, 7];
console.log(numbers1); // [0, 1, 5, 7]

let numbers2 = [4, true, ...initial, 'boom'];
console.log(numbers2); // => [4, 8, 0, 1]

//[coldSeason, ...otherSeasons] extracts the first item 'winter' 
//into coldSeason variable and the rest of elements into otherSeasons array.
var seasons = ['winter', 'spring', 'summer', 'autumn'];
let [coldSeason, blaD,  ...otherSeasons] = seasons;
console.log(coldSeason);   // => 'winter'
console.log(otherSeasons); // => ['spring', 'summer', 'autumn']
console.log(blaD);         // => 'spring'

// Spread operator and iteration protocols
var str = 'hi';
var iterator = str[Symbol.iterator]();
console.log(iterator.toString()); // => '[object String Iterator]'
console.log(iterator.next());     // => { value: 'h', done: false }
console.log(iterator.next());     // => { value: 'i', done: false }
console.log(iterator.next());     // => { value: undefined, done: //true }
console.log([...str]);            // => ['h', 'i']

// The following sample makes an array-like object conformed 
// to iteration protocols, then transforms it to an array using spread operator:
function iterator() {
  var index = 0;
  return {
    next: () => ({ // Conform to Iterator protocol
      done : index >= this.length,
      value: this[index++]
    })
  };
}
var arrayLike = {
  0: 'Cat',
  1: 'Bird',
  length: 2
};
arrayLike[Symbol.iterator] = iterator; //Conform to Iterable Protocol
var array = [...arrayLike];
console.log(array); // => ['Cat', 'Bird']
// ------------------------------------------------------------------------------

// Examples taken here
// https://medium.com/ecmascript-2015/es6-destructuring-13ca399f993a#.v93k3844b

//  -------Arrays--------
// ES6
let point = [1, 2];
let [xVal, yVal] = point;
 
console.log(xVal); // 1
console.log(yVal); // 2
// .. and reverse!
[xVal, yVal] = [yVal, xVal];
 
console.log(xVal); // 2
console.log(yVal); // 1
// So, we don't have to write outdated
// ES5
var point = [1, 2];
var xVal = point[0],
    yVal = point[1];
 
console.log(xVal); // 1
console.log(yVal); // 2

// We can even omit some values..
let threeD = [1, 2, 3];
let [a, , c] = threeD;
console.log(a); // 1
console.log(c); // 3

//..and have nested array destructuring.
let nested = [1, [2, 3], 4];
let [a, [b], d] = nested;
console.log(a); // 1
console.log(b); // 2
console.log(d); // 4

//   ---------Objects-----------
let point = {
  x: 1,
  y: 2
};
let { x: a, y: b } = point;
console.log(a); // 1
console.log(b); // 2

// Nested
let point = {
  x: 1,
  y: 2,
  z: {
    one: 3,
    two: 4
  }
};
let { x: a, y: b, z: { one: c, two: d } } = point;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4

// Mixed
let mixed = {
  one: 1,
  two: 2,
  values: [3, 4, 5]
};
let { one: a, two: b, values: [c, , e] } = mixed;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(e); // 5

//  Functions which return destructuring assignment.
function mixed () {
  return {
    one: 1,
    two: 2,
    values: [3, 4, 5]
  };
}
let { one: a, two: b, values: [c, , e] } = mixed();
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(e); // 5

//          ----------------Attention!---------------
// If the value of a destructuring assignment isn’t match, it evaluates to undefined.
let point = {
  x: 1
};
let { x: a, y: b } = point;
console.log(a); // 1
console.log(b); // undefined

//If we try to omit var, let or const, it will throw an error, 
//because block code can‘t be destructuring assignment.
let point = {
  x: 1
};
{ x: a } = point; // throws error
// We have to wrap it in parentheses. Just that!
let point = {
  x: 1
};
({ x: a } = point);
console.log(a); // 1

// Examples taken here http://anasfirdousi.com/6-things-to-start-with-in-ecma-6-ecma-2015-javascript-let-const-spread-default-params-templates-es6.html
// Destructuring an object returned from a function
 let {
          name,
          age,
          gender,
          country

        } = getUserProfile(); 

      function getUserProfile(){
        return {
                  name:"Usman",
                  age:80,
                  gender:"Male",
                  country:"Pakistan"
                };
        }

    console.log(name); // Usman
    console.log(age); // 80
    console.log(gender); // Male
    console.log(country); // Pakista

// Nested data
let {
         
          name:name,
          age:age,
          gender:gender,
          location:{country:country},
          location:{city},  // Even like this
          location:{area}  // Even like this

        } = getUserProfile(); 

      function getUserProfile(){
        return {
                  name:"Usman",
                  age:80,
                  gender:"Male",
                  location:{
                        country:"Pakistan",
                        city:"Karachi",
                        area:"North"
                    }
                };
        }

    console.log(name); // Usman
    console.log(country); // Pakistan
    console.log(city); // Karachi
    console.log(area); // North  

 // Tagged template literal 
  let x = 100,y=200,z=300;

  function tagBuilder(strings, ...values){
    console.log(strings[0]); // Sum:
    console.log(strings[1]); // ,Product:
    console.log(strings[2]); // 
    console.log(values[0]);// 600
    console.log(values[1]);// 6000000
    console.log(values[2]);// undefined
  }

  tagBuilder `Sum:${x+y+z},Product:${x*y*z}`; 

  // Destructuring case
  let toaster = function(message, {width,heigth,title}){
return width * heigth;
}

let notification = 
toaster("A simple message for humanity", { width:100,heigth:100,
title:" Dummy Title"});

console.log("Area of Notification :",notification); //10000    
