
let bagItemsObjects;
let CONVENIENCE_FEES=99;
onLoad();



// functions
function onLoad(){
    loadBagItemsObjects()
    displayBagItems();
    displayBagSummary();
}

function loadBagItemsObjects() {
    console.log(bagItems);
    bagItemsObjects = bagItems.map(itemId => {
        for(let i=0; i<items.length; i++)
        {
            if(itemId==items[i].id)
                return items[i];
        }
    })
    console.log(bagItemsObjects);
}

function displayBagItems() {
    let containerElement = document.querySelector(".bag-items-container");
    innerHTML = ``;
    bagItemsObjects.forEach(bagItem =>{
        innerHTML+=generateBagItemHTML(bagItem);
    })
    containerElement.innerHTML=innerHTML;
    
}

function removeFromBag(itemId)
{
    bagItems=bagItems.filter(bagItemId => bagItemId !== itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    
    loadBagItemsObjects();
    displayBagItems();
    displayBagCount();
    displayBagSummary();

}

function generateBagItemHTML(item) {
    return `
        <div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${item.itemImage}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.companyName}</div>
              <div class="item-name">${item.itemName}</div>
              <div class="price-container">
                <span class="current-price">Rs ${item.currentPrice}</span>
                <span class="original-price">Rs ${item.originalPrice}</span>
                <span class="discount-percentage">(${item.discount}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.returnPeriod} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.deliveryDate}</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
          </div>
    `
}

function displayBagSummary()
{

    let bagSummaryElement= document.querySelector(".bag-summary");
    let totalItem=bagItemsObjects.length;
    let totalMRP=0;
    let totalDiscount=0;
   
    bagItemsObjects.forEach(bagItem=>{
        totalMRP+=bagItem.originalPrice;
        totalDiscount+=(bagItem.originalPrice-bagItem.currentPrice);
    })

     let finalPayment=totalMRP-totalDiscount+CONVENIENCE_FEES;
    bagSummaryElement.innerHTML=
    `
        <div class="bag-details-container">
        <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
        <div class="price-item">
            <span class="price-item-tag">Total MRP</span>
            <span class="price-item-value">Rs${totalMRP}</span>
        </div>
        <div class="price-item">
            <span class="price-item-tag">Discount on MRP</span>
            <span class="price-item-value priceDetail-base-discount">-Rs${totalDiscount}</span>
        </div>
        <div class="price-item">
            <span class="price-item-tag">${CONVENIENCE_FEES}</span>
            <span class="price-item-value">Rs 99</span>
        </div>
        <hr>
        <div class="price-footer">
            <span class="price-item-tag">Total Amount</span>
            <span class="price-item-value">Rs${finalPayment}</span>
        </div>
    </div>
    <button class="btn-place-order">
        <div class="css-xjhrni">PLACE ORDER</div>
    </button>
          
    `; 
}















//  let bagItemsObjects;    
// onLoad()


// function OnLoad() {
//     displayItemsonPage()
//     loadBagItemsObjects();
//     displayBagItems();
// }

// function loadBagItemsObjects() {
//     console.log("loadBagItemsObjects");
//     console.log(bagItems);
//     bagItemsObjects = bagItems.map(itemId => {
//         for(let i=0; i<items.length; i++)
//          {
//             if(items[i].id == itemId) 
//             {
//                 return items[i];
//             }
//          } 
//         });
// }

// function displayBagItems() {
//     bagItemsContainer = document.querySelector(".bag-items-container");
//     // if(!bagItemsContainer) return;
//     let innerHTML =  `
//         <div class="bag-item-container">
//             <div class="item-left-part">
//               <img class="bag-item-img" src="../images/4.jpg">
//             </div>
//             <div class="item-right-part">
//               <div class="company">ADIDAS</div>
//               <div class="item-name">Men Printed Polo Collar Indian Cricket ODI Jersey</div>
//               <div class="price-container">
//                 <span class="current-price">Rs 999</span>
//                 <span class="original-price">Rs 999</span>
//                 <span class="discount-percentage">(0% OFF)</span>
//               </div>
//               <div class="return-period">
//                 <span class="return-period-days">14 days</span> return available
//               </div>
//               <div class="delivery-details">
//                 Delivery by
//                 <span class="delivery-details-days">10 Oct 2023</span>
//               </div>
//             </div>

//             <div class="remove-from-cart">X</div>
//           </div>
//         `;
    

//     bagItemsContainer.innerHTML = innerHTML;
// };

        
