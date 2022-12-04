let carts = document.querySelectorAll('.add-cart');

let products = [
  {
    name: "Color pencils",
    tag: "PF00007",
    price: 150,
    inCart: 0
  },
  {
    name: "Crayons",
    tag: "PF00008",
    price: 50,
    inCart: 0
  },
  {
    name: "Slime set",
    tag: "PF00009",
    price: 500,
    inCart: 0
  },
 {
  name: "Charcoal pencils",
  tag: "PF00001",
  price: 750,
  inCart: 0
  },
{
  name: "Arcylic paint set",
  tag: "PF00002",
  price: 2200,
  inCart: 0
},
{
  name: "Paint brush set",
   tag: "PF00003",
   price: 1500,
   inCart: 0
},
{
  name: "Cartridge sketch books",
  tag: "PF00004",
  price: 150,
  inCart: 0,
},
{
  name: "Multicolor sheets",
  tag: "PF00005",
  price: 100,
  inCart: 0
},
{
  name: "Color pens",
  tag: "PF00006",
  price: 250,
  inCart: 0
  
},
{
  name: "Color pencils",
  tag: "PF00007",
  price: 150,
  inCart: 0
},
{
  name: "Crayons",
  tag: "PF00008",
  price: 50,
  inCart: 0
},
{
  name: "Slime set",
  tag: "PF00009",
  price: 500,
  inCart: 0
},
{
  name: "Art blowpen set",
  tag: "PF00010",
  price: 350,
  inCart: 0
}
]

for(let i=0; i<carts.length; i++){
  
  carts[i].addEventListener('click', ()=>{
    cartNumbers(products[i]);
    totalCost(products[i]);
  })
}

function onLoadCartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');
  
  if(productNumbers){
    document.querySelector('.cart').textContent = productNumbers;
  }
}

function cartNumbers(product){
  
   let productNumbers = localStorage.getItem('cartNumbers');
   
   productNumbers= parseInt(productNumbers);
   
  if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers+1);
    document.querySelector('.cart').textContent = productNumbers+1;
  }
  else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart').textContent=1;
  }
 setItems(product);

}

function setItems(product){

let cartItems=localStorage.getItem('productsInCart');
cartItems=JSON.parse(cartItems);

if(cartItems != null){

  if(cartItems[product.tag] == undefined){
    cartItems = {
      ...cartItems,[product.tag]: product
    }

    }
    cartItems[product.tag].inCart+=1;
}
else{
     product.inCart=1;
     cartItems ={[product.tag]: product}
    }
 
  localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(product){
  let cartCost = localStorage.getItem('totalCost');
  

  console.log("the product price is", product.price);

  if(cartCost!=null){
    cartCost = parseFloat(cartCost);
    localStorage.setItem("totalCost",product.price+cartCost);
  }else{
    localStorage.setItem("totalCost",product.price);

  }
  
}
function displayCart(){
  
  
  let cartItems = localStorage.getItem("productsInCart");
  cartItems  = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products-container");
  let cartCost = localStorage.getItem('totalCost');

  if(cartItems && productContainer){
    productContainer.innerHTML += '';
    Object.values(cartItems).map(item =>{
    productContainer.innerHTML += `
    <div class="product-title product">
     <!-- <img src="../images/${item.tag}.jpg>-->
      <span>${item.name}</span>
    </div>
    <div class="price">${item.price}</div>
    <div class="cquantity">
      
      <span>${item.inCart}</span>
      
    </div>
    <div class= "total">
       INR ${item.inCart * item.price }
    </div>
    `
  });
  productContainer.innerHTML += `
  <div class="basketTotalContainer">
  <h4  class="basketTotalTitle">Basket Total
  </h4>
  <h4  class="basketTotal">
  INR ${cartCost}.00
  </h4>
  </div>
  <div class= "total">
    <a href="../shop/shop-buy.html" class="btn">Pay now</a>
  </div>
  `
}
}
onLoadCartNumbers();
displayCart();

let fav = document.querySelectorAll('.add-fav');

let favourites = [
  {
    name: "Color pencils",
    tag: "PF00007",
    price: 150,
    inCart: 0
  },
  {
    name: "Crayons",
    tag: "PF00008",
    price: 50,
    inCart: 0
  },
  {
    name: "Slime set",
    tag: "PF00009",
    price: 500,
    inCart: 0
  },
 {
  name: "Charcoal pencils",
  tag: "PF00001",
  price: 750,
  inCart: 0
  },
{
  name: "Arcylic paint set",
  tag: "PF00002",
  price: 2200,
  inCart: 0
},
{
  name: "Paint brush set",
   tag: "PF00003",
   price: 1500,
   inCart: 0
},
{
  name: "Cartridge sketch books",
  tag: "PF00004",
  price: 150,
  inCart: 0,
},
{
  name: "Multicolor sheets",
  tag: "PF00005",
  price: 100,
  inCart: 0
},
{
  name: "Color pens",
  tag: "PF00006",
  price: 250,
  inCart: 0
  
},
{
  name: "Color pencils",
  tag: "PF00007",
  price: 150,
  inCart: 0
},
{
  name: "Crayons",
  tag: "PF00008",
  price: 50,
  inCart: 0
},
{
  name: "Slime set",
  tag: "PF00009",
  price: 500,
  inCart: 0
},
{
  name: "Art blowpen set",
  tag: "PF00010",
  price: 350,
  inCart: 0
}
]

for(let i=0; i<fav.length; i++){
  
  fav[i].addEventListener('click', ()=>{
    favnumbers();
  })
}


function onLoad(){
  let favNumbers = localStorage.getItem('favnumbers');
  
  if(favNumbers){
    document.querySelector('.fav').textContent = favNumbers;
  }
}

function favnumbers(){
   let favNumbers = localStorage.getItem('favnumbers');
   
   favNumbers= parseInt(favNumbers);
   
  if(favNumbers){
    localStorage.setItem('favnumbers', favNumbers+1);
    document.querySelector('.fav').textContent = favNumbers+1;
  }
  else{
    localStorage.setItem('favnumbers', 1);
    document.querySelector('.fav').textContent=1;
  }

}
onLoad();