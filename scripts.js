let carts = document.querySelectorAll('.add-cart');


for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers();
    })
}

function viewNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers !=0){
        document.getElementById('item_length').innerText = productNumbers;
    }
    else{
        document.getElementById('item_length').innerText = 0;
    }
    LoadPic();
}


function updateNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers !=null){
        localStorage.setItem('cartNumbers', productNumbers + 1);   
        }
    else{
        localStorage.setItem('cartNumbers',1);
    } 
    viewNumbers();
}


function LoadPic(){
 
  if(localStorage.getItem('size')=='1'){
    
    if(localStorage.getItem('glazing')=='None'){
      
      document.getElementById("demo").setAttribute("src", "images/none-original.JPG");
    }
    else if(localStorage.getItem('glazing')=='Sugar_milk'){
      document.getElementById("demo").setAttribute("src", "images/sugar-milk-original.JPG");
    }
    else if(localStorage.getItem('glazing')=='Vanilla_milk'){
      document.getElementById("demo").setAttribute("src", "images/vanilla-milk-original.JPG");
    }
    else if(localStorage.getItem('glazing')=='Double_chocolate'){
      document.getElementById("demo").setAttribute("src", "images/chocolate-original.PNG");
    }
  }
  else if(localStorage.getItem('size')=='3'){
    if(localStorage.getItem('glazing')=='None'){
      document.getElementById("demo").setAttribute("src", "images/none-original-3.JPG");
    }
    else if(localStorage.getItem('glazing')=='Sugar_milk'){
      document.getElementById("demo").setAttribute("src", "images/sugar-milk-original-3.JPG");
    }
    else if(localStorage.getItem('glazing')=='Vanilla_milk'){
      document.getElementById("demo").setAttribute("src", "images/vanilla-milk-original-3.JPG");
    }
    else if(localStorage.getItem('glazing')=='Double_chocolate'){
      document.getElementById("demo").setAttribute("src", "images/chocolate-original-3.JPG");
    }
  }
  else if (localStorage.getItem('size')=='6'){
    if(localStorage.getItem('glazing')=='None'){
      document.getElementById("demo").setAttribute("src", "images/none-original-6.JPG");
    }
    else if(localStorage.getItem('glazing')=='Sugar_milk'){
      document.getElementById("demo").setAttribute("src", "images/sugar-milk-original-6.JPG");
    }
    else if(localStorage.getItem('glazing')=='Vanilla_milk'){
      document.getElementById("demo").setAttribute("src", "images/vanilla-milk-original-6.JPG");
    }
    else if(localStorage.getItem('glazing')=='Double_chocolate'){
      document.getElementById("demo").setAttribute("src", "images/chocolate-original-6.JPG");
    }
  }
  else if (localStorage.getItem('size')=='12'){
    if(localStorage.getItem('glazing')=='None'){
      document.getElementById("demo").setAttribute("src", "images/none-original-12.JPG");
    }
    else if(localStorage.getItem('glazing')=='Sugar_milk'){
      document.getElementById("demo").setAttribute("src", "images/sugar-milk-original-12.JPG");
    }
    else if(localStorage.getItem('glazing')=='Vanilla_milk'){
      document.getElementById("demo").setAttribute("src", "images/vanilla-milk-original-12.JPG");
    }
    else if(localStorage.getItem('glazing')=='Double_chocolate'){
      document.getElementById("demo").setAttribute("src", "images/chocolate-original-12.JPG");
    }
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

