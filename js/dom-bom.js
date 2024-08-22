
// cache element using getElementById
const cat_gift= document.getElementById("category_gift")

// creating h2 tag to display below gift category
let cat_gift_h2 = document.createElement("h2")    
cat_gift_h2.innerText ="Gifts"
cat_gift_h2.style.textAlign ="center" 

// appending child to cache parent element
cat_gift.appendChild(cat_gift_h2);  



// cache element using getElementById
const cat_bakery= document.getElementById("category_Bakery")

// creating h2 tag to display below bakery category
let cat_bakery_h2 = document.createElement("h2")    
cat_bakery_h2.innerText ="Bakery"
cat_bakery_h2.style.textAlign ="center" 

// appending child to cache parent element
cat_bakery.appendChild(cat_bakery_h2);  


// cache element using getElementById
const cat_food= document.getElementById("category_food")

// creating h2 tag to display below gift category
let cat_food_h2 = document.createElement("h2")    
cat_food_h2.innerText ="Food"
cat_food_h2.style.textAlign ="center" 

// appending child to cache parent element
cat_food.appendChild(cat_food_h2);  


// Event Listener :  added function to chnage theme color
const themeColorBtn = document.getElementById("theme_color");

function changeColor(){
    const root = document.querySelector(":root")
    root.style.backgroundColor = "var(--main-bg)";

    const header = document.querySelector("header")
    header.style.backgroundColor = "var( --top-menu-bg)";

    const body = document.querySelector("body")
    body.style.backgroundColor = "var(--background-color)";
}

// added event Listener for button click 
themeColorBtn.addEventListener('click', changeColor);


// Event Listener :  added function to chnage theme color
const giftImage = document.getElementById("quickLinkItemsImages");
console.log(giftImage);


function openBox(){
    alert("Hi")
}

// added event Listener for button click 
giftImage.addEventListener('click', openBox);
 


  
  // adding more menu links
  const ul = document.body
  .appendChild(document.createElement("div"))
  .appendChild(document.createElement("ul"));

for (let i = 0; i < 3; i++) {
  ol.appendChild(document.createElement("li"));
  ul.appendChild(document.createElement("li")).innerHTML="<p class='color'> Random text</p>";
  ul.appendChild(document.createElement("p"));
}

  