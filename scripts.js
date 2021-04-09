function viewNumbers(){
  
    if (localStorage.getItem('cartNumbers')!=null){
      let productNumbers = localStorage.getItem('cartNumbers');

      document.getElementById('item_length').innerText = productNumbers;
    }
    else{
      localStorage.setItem('cartNumbers','0');
      
      document.getElementById('item_length').innerText = '0';
    }
 
    let productContainer = document.querySelector(".original_container");

    if(productContainer ){
      LoadPic();
    }
}


function updateNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers!=null){
        productNumbers = parseInt(productNumbers);
        productNumbers = productNumbers + 1;
        localStorage.setItem('cartNumbers', productNumbers.toString());   
        }
    else{
        localStorage.setItem('cartNumbers',1);
    } 
    viewNumbers();
    let productIndex = localStorage.getItem('index');
    productIndex = parseInt(productIndex);
    addToCart(products[productIndex]);
}

let products = [
  {
    name: "Original",
    glazing: "None",
    price: "$3.00",
    tag: "none1",
    inCart: 0,
    size: "1"
  },
  {
    name: "Original",
    glazing: "Sugar_milk",
    price: "$3.00",
    tag: "sugar1",
    inCart: 0,
    size: "1"
  },
  {
    name: "Original",
    glazing: "Vanilla_milk",
    price: "$3.00",
    tag: "vanilla1",
    inCart: 0,
    size: "1"
  },
  {
    name: "Original",
    glazing: "Double_chocolate",
    price: "$3.00",
    tag: "chocolate1",
    inCart: 0,
    size: "1"
  },

  {
    name: "Original",
    glazing: "None",
    price: "$3.00",
    tag: "none3",
    inCart: 0,
    size: "3"
  },
  {
    name: "Original",
    glazing: "Sugar_milk",
    price: "$3.00",
    tag: "sugar3",
    inCart: 0,
    size: "3"
  },
  {
    name: "Original",
    glazing: "Vanilla_milk",
    price: "$3.00",
    tag: "vanilla3",
    inCart: 0,
    size: "3"
  },
  {
    name: "Original",
    glazing: "Double_chocolate",
    price: "$3.00",
    tag: "chocolate3",
    inCart: 0,
    size: "3"
  },

  {
    name: "Original",
    glazing: "None",
    price: "$3.00",
    tag: "none6",
    inCart: 0,
    size: "6"
  },
  {
    name: "Original",
    glazing: "Sugar_milk",
    price: "$3.00",
    tag: "sugar6",
    inCart: 0,
    size: "6"
  },
  {
    name: "Original",
    glazing: "Vanilla_milk",
    price: "$3.00",
    tag: "vanilla6",
    inCart: 0,
    size: "6"
  },
  {
    name: "Original",
    glazing: "Double_chocolate",
    price: "$3.00",
    tag: "chocolate6",
    inCart: 0,
    size: "6"
  },

  {
    name: "Original",
    glazing: "None",
    price: "$3.00",
    tag: "none12",
    inCart: 0,
    size: "12"
  },
  {
    name: "Original",
    glazing: "Sugar_milk",
    price: "$3.00",
    tag: "sugar12",
    inCart: 0,
    size: "12"
  },
  {
    name: "Original",
    glazing: "Vanilla_milk",
    price: "$3.00",
    tag: "vanilla12",
    inCart: 0,
    size: "12"
  },
  {
    name: "Original",
    glazing: "Double_chocolate",
    price: "$3.00",
    tag: "chocolate12",
    inCart: 0,
    size: "12"
  }
  
];

function LoadPic(){
 
  if(localStorage.getItem('size')=='1'){
    
    if(localStorage.getItem('glazing')=='None'){
      document.getElementById("demo").setAttribute("src", "images/none1.jpg");
      localStorage.setItem('index','0');
    }
    else if(localStorage.getItem('glazing')=='Sugar_milk'){
      document.getElementById("demo").setAttribute("src", "images/sugar1.jpg");
      localStorage.setItem('index','1');
    }
    else if(localStorage.getItem('glazing')=='Vanilla_milk'){
      document.getElementById("demo").setAttribute("src", "images/vanilla1.jpg");
      localStorage.setItem('index','2');
    }
    else if(localStorage.getItem('glazing')=='Double_chocolate'){
      document.getElementById("demo").setAttribute("src", "images/chocolate1.jpg");
      localStorage.setItem('index','3');
    }
  }
  else if(localStorage.getItem('size')=='3'){
    if(localStorage.getItem('glazing')=='None'){
      document.getElementById("demo").setAttribute("src", "images/none3.jpg");
      localStorage.setItem('index','4');
    }
    else if(localStorage.getItem('glazing')=='Sugar_milk'){
      document.getElementById("demo").setAttribute("src", "images/sugar3.jpg");
      localStorage.setItem('index','5');
    }
    else if(localStorage.getItem('glazing')=='Vanilla_milk'){
      document.getElementById("demo").setAttribute("src", "images/vanilla3.jpg");
      localStorage.setItem('index','6');
    }
    else if(localStorage.getItem('glazing')=='Double_chocolate'){
      document.getElementById("demo").setAttribute("src", "images/chocolate3.jpg");
      localStorage.setItem('index','7');
    }
  }
  else if (localStorage.getItem('size')=='6'){
    if(localStorage.getItem('glazing')=='None'){
      document.getElementById("demo").setAttribute("src", "images/none6.jpg");
      localStorage.setItem('index','8');
    }
    else if(localStorage.getItem('glazing')=='Sugar_milk'){
      document.getElementById("demo").setAttribute("src", "images/sugar6.jpg");
      localStorage.setItem('index','9');
    }
    else if(localStorage.getItem('glazing')=='Vanilla_milk'){
      document.getElementById("demo").setAttribute("src", "images/vanilla6.jpg");
      localStorage.setItem('index','10');
    }
    else if(localStorage.getItem('glazing')=='Double_chocolate'){
      document.getElementById("demo").setAttribute("src", "images/chocolate6.jpg");
      localStorage.setItem('index','11');
    }
  }
  else if (localStorage.getItem('size')=='12'){
    if(localStorage.getItem('glazing')=='None'){
      document.getElementById("demo").setAttribute("src", "images/none12.jpg");
      localStorage.setItem('index','12');
    }
    else if(localStorage.getItem('glazing')=='Sugar_milk'){
      document.getElementById("demo").setAttribute("src", "images/sugar12.jpg");
      localStorage.setItem('index','13');
    }
    else if(localStorage.getItem('glazing')=='Vanilla_milk'){
      document.getElementById("demo").setAttribute("src", "images/vanilla12.jpg");
      localStorage.setItem('index','14');
    }
    else if(localStorage.getItem('glazing')=='Double_chocolate'){
      document.getElementById("demo").setAttribute("src", "images/chocolate12.jpg");
      localStorage.setItem('index','15');
    }
  }
}

// learn from https://www.youtube.com/watch?v=tEAl7L62GEw&t=20s
function addToCart(product){
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems != null){

    if (cartItems[product.tag] == undefined){
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1;
  }else{
    product.inCart = 1;
    cartItems = {
      [product.tag]:product
    }
  }

  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function deleteButtons(){
  console.log("Adfas d");
  let deleteButtons = document.querySelectorAll('.delete');
  let productName;
  let productNumbers = localStorage.getItem('cartNumbers');
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let cartCost = localStorage.getItem('totalCost');

  for(let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click',() => {
      productName = deleteButtons[i].parentElement.textContext.trim();
      console.log("product",productName);
      localStorage.setItem('cartNumbers',productNumbers - cartItems[productName].inCart);

      delete cartItems[productName];
      localStorage.setItem('productsInCart', JSON.stringify(cartItems)); 

      displayCart();
      onLoadviewNumbers();
    });
  }
}


// learn from https://www.youtube.com/watch?v=IY5UN82FZ2Q
function displayCart(){
  
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products-container");

  console.log(cartItems);
  if( cartItems && productContainer ){
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      console.log("this is the itesm",item);
      productContainer.innerHTML +=`
      <div class = "product">
        <img src = "images/${item.tag}.jpg" class="product_listing_pic">
        <br/>
        <span>Name: ${item.name}</span>
      </div>
      <div class = "price">Price: ${item.price}</div>
      <div class = "quantity"><span>Size: ${item.inCart}</span></div>
      
      <button class = "delete">delete</button>  
      `;
      
    });

  }
  deleteButtons();
}

function changeSize1(){
  localStorage.setItem('size', '1');
  location.reload();
}

function changeSize3(){
  localStorage.setItem('size', '3');
  location.reload();
}

function changeSize6(){
  localStorage.setItem('size', '6');
  location.reload();
}

function changeSize12(){
  localStorage.setItem('size', '12');
  location.reload();
}

function changeGlazing1(){
  localStorage.setItem('glazing', 'None');
  location.reload();
}

function changeGlazing2(){
  localStorage.setItem('glazing', 'Sugar_milk');
  location.reload();
}

function changeGlazing3(){
  localStorage.setItem('glazing', 'Vanilla_milk');
  location.reload();
}

function changeGlazing4(){
  localStorage.setItem('glazing', 'Double_chocolate');
  location.reload();
}

displayCart()