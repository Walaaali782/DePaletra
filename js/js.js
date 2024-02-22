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
