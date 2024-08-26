//*** Below part adds H2 tags below Categories images i.e Gifts, Bakery, Food */

// cache element using getElementById
const cat_gift= document.getElementById("category_gift")

// creating h2 tag to display below gift category
let cat_gift_h2 = document.createElement("h2")    
cat_gift_h2.innerText ="Gifts"
cat_gift_h2.style.textAlign ="center" 

// appending child to cache parent element
cat_gift.appendChild(cat_gift_h2);  



// for bakery 
const cat_bakery= document.getElementById("category_Bakery")

let cat_bakery_h2 = document.createElement("h2")    
cat_bakery_h2.innerText ="Bakery"
cat_bakery_h2.style.textAlign ="center" 

cat_bakery.appendChild(cat_bakery_h2);  


// for Food
const cat_food= document.getElementById("category_food")

let cat_food_h2 = document.createElement("h2")    
cat_food_h2.innerText ="Food"
cat_food_h2.style.textAlign ="center" 

cat_food.appendChild(cat_food_h2);  


//*** Event Listener-1 :  added function to change theme color by clicking button ob banner */
const themeColorBtn = document.getElementById("theme_color");

function changeColor(){
    const root = document.querySelector(":root")
    root.style.backgroundColor = "var(--main-bg)";

    const header = document.querySelector("header")
    header.style.backgroundColor = "var( --top-menu-bg)";

    const body = document.querySelector("body")
    body.style.backgroundColor = "var(--background-color)";

    themeColorBtn.style.display = 'none';
}

// added event Listener for button click 
themeColorBtn.addEventListener('click', changeColor);




//** Event Listener-2 :  added function open popup */
const giftImage = document.getElementById("quickLinkItemsImages");

let content = false;  // variable declared to avoid ultiple times content adding to popup box
function openGiftBox(){

    // changing display property of popup and overlay to show popup
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    // cache element using getElementById
    const giftListing = document.getElementById("giftsListing")
    //console.log(content);

    //added condition to check if content is already available in popup box, if not added i.e first time add below content to popup box
    if (!content) {
        const giftListingItms = document.createElement("h2")    
        
        giftListingItms.innerHTML += `<ul>`
        giftListingItms.innerHTML += `<li><img src="../images/heart1.png" alt="Heart" height="50px" width="50px" >Heart</li>`
        giftListingItms.innerHTML += `<li><img src="../images/trueFriends.png" alt="Heart" height="50px" width="50px" >Friends</li>`
        giftListingItms.innerHTML += `<li><img src="../images/cups.png" alt="Heart" height="50px" width="50px" >Cups</li>`
        giftListingItms.innerHTML +=`</ul>`

        content = true; // setting var content to true to avoid adding content multiple times
    
        // appending child to cache parent element
        giftListing.appendChild(giftListingItms); 
    }

}
// added event Listener for button click 
giftImage.addEventListener('click', openGiftBox);
 
// popup closed whe close button clicked
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

// popup closed whe overlay clicked
document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

/** Below code added just to iterate over elements to fine image tag with id and then apply border to it */
 
const containers = document.querySelectorAll('.categories_row');
//Iterate over a collection of elements
containers.forEach(container => {
    // Select all image elements inside the current container
    const images = container.querySelectorAll('img');
    // Iterate over each image
    images.forEach(img => {
        if (img.hasAttribute('id')) {
            img.classList.add('hover-border');
        }
    });
});
  