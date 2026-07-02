console.log("hello world");
let bagItems;
onLoad();
// functions
function onLoad() {
    bagItems = JSON.parse(localStorage.getItem("bagItems")) || [];
    displayItemsonPage();
    displayBagCount();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
    displayBagCount();
}

function displayBagCount() {
    let bagCountElement = document.querySelector(".bag_count");
    // bagCountElement.innerText = bagItems.length;
    if(bagItems.length > 0) 
    {
        bagCountElement.style.visibility = "visible";
        bagCountElement.innerText = bagItems.length;
    }
    else
    {
        bagCountElement.style.visibility = "hidden";
    }
    
}

function displayItemsonPage() 
{

    let itemsContainer = document.querySelector(".items_container");
    if(!itemsContainer) return;
    let innerHTML = "";
    items.forEach((item) => {
        innerHTML += `
        <div class="item_container">
            <img class="item_image" src="${item.itemImage}  " alt="Item image">
            <div class="item_details">
                <div class="reviews">
                    <span class="rating">${item.reviews.rating}⭐</span> | <span class="review-count">${item.reviews.reviewCount}k</span>
                </div>
                <div class="company_name">${item.companyName}</div>
                <div class="item_name">${item.itemName}</div>
                <div class="item_price">
                    <span class="current_price">₹${item.currentPrice}</span>
                    <span class="original_price">₹${item.originalPrice}</span>
                    <span class="discount">${item.discount}% off</span>
                </div>
            </div>
            <button class="add_to_bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>
    `;
    });
    itemsContainer.innerHTML = innerHTML;
}











   