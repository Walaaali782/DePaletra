// const burger = document.getElementById('burger');
// const ul = document.querySelector('nav ul');

// burger.addEventListener('click', () => {
// 	burger.classList.toggle('show-x');
// 	ul.classList.toggle('show');
// });
// const burger = document.getElementById('burger');
// const ul = document.querySelector('nav ul');

// burger.addEventListener('click', () => {
// 	burger.classList.toggle('show-x');
// 	ul.classList.toggle('show');
// });

let cont = document.querySelector(".lines-container");
let menu = document.querySelector(".menu");
let pointer = document.querySelector(".pointer");
let blog = document.querySelector(".blog");
let contact = document.querySelector(".contact");
let blogChild = document.querySelector(".blog-child");
let contactChild = document.querySelector(".contact-child");
cont.addEventListener("click", () => {
    blog.classList.remove("content");
    contact.classList.remove("content");
     if(menu.style.maxHeight){
        menu.style.maxHeight = null;
        blogChild.style.maxHeight = null;
        contactChild.style.maxHeight = null;
        pointer.style.display = "none";
        setTimeout(() => {
            pointer.classList.remove("pointer-up");
            pointer.style.display = "block";
        }, 500);
        
     }else{
        menu.style.maxHeight = menu.scrollHeight + "px"; 
        pointer.style.display = "none";
        setTimeout(() => {
            pointer.classList.toggle("pointer-up");
            pointer.style.display = "block";
        }, 500);
     }    
})
pointer.addEventListener("click", () => {
    blog.classList.remove("content");
    contact.classList.remove("content");
    if(menu.style.maxHeight){
        menu.style.maxHeight = null;
        blogChild.style.maxHeight = null;
        contactChild.style.maxHeight = null;
        pointer.style.display = "none";
        setTimeout(() => {
            pointer.classList.remove("pointer-up");
            pointer.style.display = "block";
        }, 500);
     }else{
        menu.style.maxHeight = menu.scrollHeight + "px"; 
        pointer.style.display = "none";
        setTimeout(() => {
            pointer.classList.toggle("pointer-up");
            pointer.style.display = "block";
        }, 500);
     }    
})
blog.addEventListener("click", () => {
    if(blogChild.style.maxHeight){
        blogChild.style.maxHeight = null;
        blog.classList.add("btn-anime");
        blog.classList.remove("content");
        setTimeout(() => {
            blog.classList.remove("btn-anime");   
        }, 100);
     }else{
        blogChild.style.maxHeight = blogChild.scrollHeight + "px"; 
        menu.style.maxHeight = menu.scrollHeight + blogChild.scrollHeight + "px"; 
        blog.classList.add("btn-anime");
        blog.classList.add("content");
        setTimeout(() => {
            blog.classList.remove("btn-anime");   
        }, 100);
     }    
})
contact.addEventListener("click", () => {
    if(contactChild.style.maxHeight){
        contactChild.style.maxHeight = null;
        contact.classList.add("btn-anime");
        contact.classList.remove("content");
        setTimeout(() => {
            contact.classList.remove("btn-anime");   
        }, 100);
     }else{
        contactChild.style.maxHeight = contactChild.scrollHeight + "px"; 
        menu.style.maxHeight = menu.scrollHeight + contactChild.scrollHeight + "px"; 
        contact.classList.add("btn-anime");
        contact.classList.add("content");
        setTimeout(() => {
            contact.classList.remove("btn-anime");   
        }, 100);
     }    
})

// let m = document.querySelector(".kjkj img");
// m.style.display = "none";
// function toggleImage() {
//     if (m.style.display === 'none') {
//         m.style.display = 'block'; // Show the image
//     } else {
//         m.style.display = 'none'; // Hide the image
//     }
// }

// // Call toggleImage() function every 2 seconds (2000 milliseconds)
// setInterval(toggleImage, 2000);


let input = document.querySelector('.input');
let add = document.querySelector('.add');
let tasks = [];
if(window.localStorage.getItem('tasks')) {
    tasks = tasks.concat(JSON.parse(window.localStorage.tasks));
    tasks.forEach((e) => {
        let p = document.createElement('p');
        p.innerHTML = e;
        let del = document.createElement('button');
        del.innerHTML = "Delete";
        let div = document.createElement('div');
        div.append(p);
        div.append(del);
        document.querySelector('.tasks').append(div);
        del.addEventListener('click', (e) => {
          // check returns the previous element in the same tree level.
            tasks = tasks.filter((element) => element !== `${e.currentTarget.previousElementSibling.innerHTML}`);
            console.log(tasks);
            window.localStorage.setItem('tasks', JSON.stringify(tasks));
            e.currentTarget.parentElement.remove();
        })
    })
}
// document.forms[0].onsubmit = function(event){
  //  event.preventDefault();
// }
add.addEventListener('click', (e) => {
    if(input.value == "") {
        return;
    } else {
        tasks = tasks.concat(input.value);
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
        let p = document.createElement('p');
        p.innerHTML = input.value;
        let del = document.createElement('button');
        del.innerHTML = "Delete";
        let div = document.createElement('div');
        div.append(p);
        div.append(del);
        document.querySelector('.tasks').append(div);
        del.addEventListener('click', (e) => {
            console.log(e.currentTarget.previousElementSibling.innerHTML) //p
           tasks = tasks.filter((element) => element !== `${e.currentTarget.previousElementSibling.innerHTML}`);
           console.log(tasks);
           window.localStorage.setItem('tasks', JSON.stringify(tasks));
            e.currentTarget.parentElement.remove();
        })
    }
});









// var item = {input1: 'input1value', input2: 'input2value' };
// localStorage.setItem( itemIndex, JSON.stringify(item) );
// for(var i=0;i<localStorage.length; i++) {
//   var key = localStorage.key( i );
//   var item = JSON.parse( localStorage.getItem( key ) );
// }




//115 to 122

// let myNumbers = [1, 2, 3, 4, 5];
// let [a , , , ,e] =myNumbers
// console.log(a * e); // 5


// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
// let [a ,b ,c ,[d,e,[f,g]] ] =mySkills;
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel


//chanlege 
// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];
// let s = arr1.concat(arr3);
// // ['Ahmed', 'Sameh', 'Sayed', 'Haytham', 'Shady', 'Mahmoud']
// let [c,,,,a,b]= s;
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// // My Best Friends: Shady, Mahmoud, Ahmed


// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };
// // Write Your Destructuring Assignment Here
// const {age :a, working:w } = member ;
// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working
// const {country :c } = member ;
// console.log(`I Live in ${c}`);
// // I Live in Egypt
// const [h1, , h3] = member.hobbies ;
// console.log(`My Hobbies: ${h1} And ${h3}`);
// // My Hobbies: Reading And Programming


// const game = {
//   title: "YS",
//   developer: "Falcom",
//   releases: {
//     "Oath In Felghana": ["USA", "Japan"],
//     "Ark Of Napishtim": {
//       US: "20 USD",
//       JAP: "10 USD",
//     },
//     Origin: "30 USD",
//   },
// };
// const {title:t} = game ;
// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style
// const {developer:d} = game ;
// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games

// const [o,a] = Object.keys(game.releases) ;
// const [[u,j] ,{US:u_price ,JAP:j_price}] =Object.values(game.releases);
 
//  console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // // My Best Release Is Oath In Felghana It Released in USA & Japan

//  console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim

// console.log(`${a} Price in USA Is ${u_price}`);
// // // Ark Of Napishtim Price in USA Is 20 USD

//  console.log(`${a} Price in Japan Is ${j_price}`);
// // Ark Of Napishtim Price in Japan Is 10 USD
// const {Origin:or}= game.releases
// console.log(`Origin Price Is ${or}`);
// // Origin Price Is 30 USD


// let chosen = 3;
// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];
// // If chosen === 1
// if(chosen===1){
//   let [{title:t,age:a, available:av, skills:[ , c] } , ,]=myFriends;
//   console.log(t);
//   console.log(a);
//   console.log(`${av ? "available":"Not available"}`);
//   console.log(c);
// }
// "Osama"
// 39
// "Available"
// "CSS"

// // If chosen === 2
// if(chosen===2){
//   let [ , {title:t,age:a, available:av, skills:[ , c] }  , ]=myFriends;
//   console.log(t);
//   console.log(a);
//   console.log(`${av ? "available":"Not available"}`);
//   console.log(c);
// }
// "Ahmed"
// 25
// "Not Available"
// "Django"

// // If chosen === 3
// if(chosen===3){
//   let [, ,{title:t,age:a, available:av, skills:[ , c] }]=myFriends;
//   console.log(t);
//   console.log(a);
//   console.log(`${av ? "available":"Not available"}`);
//   console.log(c);
// }
// "Sayed"
// 33
// "Available"
// "Laravel"



// 123 to 133


// let setOfNumbers = new Set([10])
// setOfNumbers.add(20);
// setOfNumbers.add(setOfNumbers.size);
// console.log(setOfNumbers);


// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// let setmyFriends  = new Set(myFriends);
// setmyFriends = [...setmyFriends];
// console.log(setmyFriends.sort());
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']


// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };
// let map = new Map(Object.entries(myInfo));
// console.log(map);
// console.log(map.size);
// console.log(map.has("role"));
// // Needed Output
// // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// // 3
// // true


// let theNumber = 100020003000;
// let s  = new Set([...theNumber.toString()]);
// s.delete("0");
// console.log(+[...s].join(""));
// // two solution
//console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""));
// 123


// let theName = "Elzero";
// console.log([...theName]);
// console.log(theName.split(""));
// console.log(Array.from(theName));
// console.log(Object.assign([],theName));
// console.log([...new Set(theName)]);
// // Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']


// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// console.log(chars.copyWithin(3));


// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// chars= chars.sort()
// //  [10, 15, 20, 6, 'A', 'B', 'C', 'D', 'E']
// console.log(chars.copyWithin(0,4,8));
// // Needed Output
// // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']


// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// chars.copyWithin(4,2,5)
// //  ['Z', 'Y', 'A', 'D', 'A', 'D', 'E']
// console.log(chars.copyWithin(2,0,2));
// // Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]


// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];
// let a = [...numsOne,...numsTwo]
// console.log(a)
// let c = numsOne.concat(numsTwo);
// console.log(c);
// let b = numsOne ;
// b.push.apply(b,numsTwo);
// console.log(b);
// [1, 2, 3, 4, 5, 6]


// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// console.log((Math.min(...n2)*n1[n2.length])+ Math.min(...n1));
// 210



// 134 to 146

// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let re = /\d{4}\:\w{2}\d\:\d{4}\:\d{4}\:\d{4}\:\d{4}\:\d{4}\:\d{4}/ig;
// console.log(ip.match(re));

// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// let re = /OS\d*o/ig;
// console.log(specialNames.match(re));
// ['Os10O', 'OsO', 'Os100O']

// let phone = "+(995)-123 (4567)";
// let re = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;
// console.log(phone.match(re));

// let t= "http://:a.pp.ooo:.pp/..."
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// console.log(t.match(re));


// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";
// let re = /\d{2}(\s|\s-\s|\/)\d{2}(\s|\s-\s|\/)\d+/; // Write Pattern Here
// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"

// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
// let re = /h?t?t?p?s?:?\/?\/?(www.)?elzero.org:?(\d{4})?\/?(\w+)?(\.(\w+)\?(\w+)=\d{3}&(\w+)=(\w+))?/; // Write Your Pattern Here
// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));


// 147 to 158 
// class Car {
// constructor(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
//   }
//   run() {
//    return `Car Is Running Now` ;
//   }
//   stop() {
//     return `Car Is stoping Now` ;
//    }
// }
// let car1 = new Car("MG",2022,420000);
// let car2 = new Car("TTG",2000,4900);
// let car3 = new Car("PP",2012,90000);
// console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`);
// console.log(car1.run());

//   "Car One Name Is MG And Model Is 2022 And Price Is 420000"
//   "Car Is Running Now"


// class Phone {
//     constructor(name, serial, price) {
//       this.name = name;
//       this.serial = serial;
//       this.price = price;
//     }
//   }
//   // Write Tablet Class Here
//   class Tablet extends Phone {
//     constructor(name, serial, price,size) {
//      super(name, serial, price);
//       this.size = size || "Unknown";
//     }
//     fullDetails(){
//         return ` ${this.name} Serial is ${this.serial} And Size Is ${this.size} `;
//     }
//   }
//   let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
//   let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
//   let TabletThree = new Tablet("LG", 250450650, 650);
//   console.log(`${TabletOne.fullDetails()}`);
//   // iPad Serial is 100200300 And Size Is 12.9
//   console.log(`${TabletTwo.fullDetails()}`);
//   // Nokia Serial is 350450650 And Size Is 10.5
//   console.log(`${TabletThree.fullDetails()}`);
//   // LG Serial is 250450650 And Size Is Unknown

