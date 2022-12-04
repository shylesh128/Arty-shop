let carts = document.querySelectorAll('.add-cart');

for(let i=0; i<carts.length; i++){
  
  carts[i].addEventListener('click', ()=>{
    cartnumbers();
  })
}

function cartnumbers(){
   let productNumbers = localStorage.getItem('cartnumbers');
   console.log(productNumbers);
  localStorage.setItem('cartnumbers', 1);

}