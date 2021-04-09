function viewNumbers(){
  
    if (localStorage.getItem('cartNumbers')==null){
      
      localStorage.setItem('cartNumbers',0);
      
      document.getElementById('item_length').innerText = 0;
    }
    else{
      let productNumbers = localStorage.getItem('cartNumbers');

      productNumbers = parseInt(productNumbers);
        
      document.getElementById('item_length').innerText = productNumbers;

    }
    
  
    LoadPic();
}


function updateNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers!=null){
        productNumbers = parseInt(productNumbers);
        localStorage.setItem('cartNumbers', productNumbers + 1);   
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
      document.getElementById("demo").setAttribute("src", "images/none-original.JPG");
      localStorage.setItem('index','0');
    }
    else if(localStorage.getItem('glazing')=='Sugar_milk'){
      document.getElementById("demo").setAttribute("src", "images/sugar-milk-original.JPG");
      localStorage.setItem('index','1');
    }
    else if(localStorage.getItem('glazing')=='Vanilla_milk'){
      document.getElementById("demo").setAttribute("src", "images/vanilla-milk-original.JPG");
      localStorage.setItem('index','2');
    }
    else if(localStorage.getItem('glazing')=='Double_chocolate'){
      document.getElementById("demo").setAttribute("src", "images/chocolate-original.PNG");
      localStorage.setItem('index','3');
    }
  }
  else if(localStorage.getItem('size')=='3'){
    if(localStorage.getItem('glazing')=='None'){
      document.getElementById("demo").setAttribute("src", "images/none-original-3.JPG");
      localStorage.setItem('index','4');
    }
    else if(localStorage.getItem('glazing')=='Sugar_milk'){
      document.getElementById("demo").setAttribute("src", "images/sugar-milk-original-3.JPG");
      localStorage.setItem('index','5');
    }
    else if(localStorage.getItem('glazing')=='Vanilla_milk'){
      document.getElementById("demo").setAttribute("src", "images/vanilla-milk-original-3.JPG");
      localStorage.setItem('index','6');
    }
    else if(localStorage.getItem('glazing')=='Double_chocolate'){
      document.getElementById("demo").setAttribute("src", "images/chocolate-original-3.JPG");
      localStorage.setItem('index','7');
    }
  }
  else if (localStorage.getItem('size')=='6'){
    if(localStorage.getItem('glazing')=='None'){
      document.getElementById("demo").setAttribute("src", "images/none-original-6.JPG");
      localStorage.setItem('index','8');
    }
    else if(localStorage.getItem('glazing')=='Sugar_milk'){
      document.getElementById("demo").setAttribute("src", "images/sugar-milk-original-6.JPG");
      localStorage.setItem('index','9');
    }
    else if(localStorage.getItem('glazing')=='Vanilla_milk'){
      document.getElementById("demo").setAttribute("src", "images/vanilla-milk-original-6.JPG");
      localStorage.setItem('index','10');
    }
    else if(localStorage.getItem('glazing')=='Double_chocolate'){
      document.getElementById("demo").setAttribute("src", "images/chocolate-original-6.JPG");
      localStorage.setItem('index','11');
    }
  }
  else if (localStorage.getItem('size')=='12'){
    if(localStorage.getItem('glazing')=='None'){
      document.getElementById("demo").setAttribute("src", "images/none-original-12.JPG");
      localStorage.setItem('index','12');
    }
    else if(localStorage.getItem('glazing')=='Sugar_milk'){
      document.getElementById("demo").setAttribute("src", "images/sugar-milk-original-12.JPG");
      localStorage.setItem('index','13');
    }
    else if(localStorage.getItem('glazing')=='Vanilla_milk'){
      document.getElementById("demo").setAttribute("src", "images/vanilla-milk-original-12.JPG");
      localStorage.setItem('index','14');
    }
    else if(localStorage.getItem('glazing')=='Double_chocolate'){
      document.getElementById("demo").setAttribute("src", "images/chocolate-original-12.JPG");
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



function display(){
  bucket1 = localStorage.getItem("cart_size");
  bucket2 = localStorage.getItem("cart_glazing");
  console.log("length",bucket1.length);
  console.log("bucket1",bucket1);
  console.log("bucket2",bucket2);
  for (i = 0; i < bucket1.length; i++) {
    console.log("inside of setitems function");
    console.log("the size is ", bucket1[i]);
    console.log("the glazing is ", bucket2[i]);

  }
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

