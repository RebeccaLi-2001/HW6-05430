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
}


function LoadPic(){
 
  if(localStorage.getItem('size')=='1'){
    
    if(localStorage.getItem('glazing')=='None'){
      
      document.getElementById("demo").setAttribute("src", "images/none-original.JPG");
      if (localStorage.getItem("cart")!=null){
        input = localStorage.getItem("cart");
        input.push(['1','None']);
        localStorage.setItem("cart", input); 
      }
      else {
        input = Array.new;
        input.push(['1','None']);
        localStorage.setItem("cart", input); 
      }
      
    }
    else if(localStorage.getItem('glazing')=='Sugar_milk'){
      document.getElementById("demo").setAttribute("src", "images/sugar-milk-original.JPG");
      if (localStorage.getItem("cart")!=null){
        input = localStorage.getItem("cart");
        input.push(['1','Sugar_milk']);
        localStorage.setItem("cart", input); 
      }
      else {
        input = Array.new;
        input.push(['1','Sugar_milk']);
        localStorage.setItem("cart", input); 
      }
    }
    else if(localStorage.getItem('glazing')=='Vanilla_milk'){
      document.getElementById("demo").setAttribute("src", "images/vanilla-milk-original.JPG");
      if (localStorage.getItem("cart")!=null){
        input = localStorage.getItem("cart");
        input.push(['1','Vanilla_milk']);
        localStorage.setItem("cart", input); 
      }
      else {
        input = Array.new;
        input.push(['1','Vanilla_milk']);
        localStorage.setItem("cart", input); 
      }
    }
    else if(localStorage.getItem('glazing')=='Double_chocolate'){
      document.getElementById("demo").setAttribute("src", "images/chocolate-original.PNG");
      if (localStorage.getItem("cart")!=null){
        input = localStorage.getItem("cart");
        input.push(['1','Double_chocolate']);
        localStorage.setItem("cart", input); 
      }
      else {
        input = Array.new;
        input.push(['1','Double_chocolate']);
        localStorage.setItem("cart", input); 
      }
    }
  }
  else if(localStorage.getItem('size')=='3'){
    if(localStorage.getItem('glazing')=='None'){
      document.getElementById("demo").setAttribute("src", "images/none-original-3.JPG");
      if (localStorage.getItem("cart")!=null){
        input = localStorage.getItem("cart");
        input.push(['3','None']);
        localStorage.setItem("cart", input); 
      }
      else {
        var input = Array.new;
        input.push(['3','None']);
        localStorage.setItem("cart", input); 
      }
    }
    else if(localStorage.getItem('glazing')=='Sugar_milk'){
      document.getElementById("demo").setAttribute("src", "images/sugar-milk-original-3.JPG");
      if (localStorage.getItem("cart")!=null){
        input = localStorage.getItem("cart");
        input.push(['3','Sugar_milk']);
        localStorage.setItem("cart", input); 
      }
      else {
        input = Array.new;
        input.push(['3','Sugar_milk']);
        localStorage.setItem("cart", input); 
      }
    }
    else if(localStorage.getItem('glazing')=='Vanilla_milk'){
      document.getElementById("demo").setAttribute("src", "images/vanilla-milk-original-3.JPG");
      if (localStorage.getItem("cart")!=null){
        input = localStorage.getItem("cart");
        input.push(['3','Vanilla_milk']);
        localStorage.setItem("cart", input); 
      }
      else {
        input = Array.new;
        input.push(['3','Vanilla_milk']);
        localStorage.setItem("cart", input); 
      }
    }
    else if(localStorage.getItem('glazing')=='Double_chocolate'){
      document.getElementById("demo").setAttribute("src", "images/chocolate-original-3.JPG");
      if (localStorage.getItem("cart")!=null){
        input = localStorage.getItem("cart");
        input.push(['3','Double_chocolate']);
        localStorage.setItem("cart", input); 
      }
      else {
        input = Array.new;
        input.push(['3','Double_chocolate']);
        localStorage.setItem("cart", input); 
      }
    }
  }
  else if (localStorage.getItem('size')=='6'){
    if(localStorage.getItem('glazing')=='None'){
      document.getElementById("demo").setAttribute("src", "images/none-original-6.JPG");
      if (localStorage.getItem("cart")!=null){
        input = localStorage.getItem("cart");
        input.push(['6','None']);
        localStorage.setItem("cart", input); 
      }
      else {
        input = Array.new;
        input.push(['6','None']);
        localStorage.setItem("cart", input); 
      }
    }
    else if(localStorage.getItem('glazing')=='Sugar_milk'){
      document.getElementById("demo").setAttribute("src", "images/sugar-milk-original-6.JPG");
      if (localStorage.getItem("cart")!=null){
        input = localStorage.getItem("cart");
        input.push(['6','Sugar_milk']);
        localStorage.setItem("cart", input); 
      }
      else {
        input = Array.new;
        input.push(['6','Sugar_milk']);
        localStorage.setItem("cart", input); 
      }
    }
    else if(localStorage.getItem('glazing')=='Vanilla_milk'){
      document.getElementById("demo").setAttribute("src", "images/vanilla-milk-original-6.JPG");
      if (localStorage.getItem("cart")!=null){
        input = localStorage.getItem("cart");
        input.push(['6','Vanilla_milk']);
        localStorage.setItem("cart", input); 
      }
      else {
        input = Array.new;
        input.push(['6','Vanilla_milk']);
        localStorage.setItem("cart", input); 
      }
    }
    else if(localStorage.getItem('glazing')=='Double_chocolate'){
      document.getElementById("demo").setAttribute("src", "images/chocolate-original-6.JPG");
      if (localStorage.getItem("cart")!=null){
        input = localStorage.getItem("cart");
        input.push(['6','Double_chocolate']);
        localStorage.setItem("cart", input); 
      }
      else {
        input = Array.new;
        input.push(['6','Double_chocolate']);
        localStorage.setItem("cart", input); 
      }
    }
  }
  else if (localStorage.getItem('size')=='12'){
    if(localStorage.getItem('glazing')=='None'){
      document.getElementById("demo").setAttribute("src", "images/none-original-12.JPG");
      if (localStorage.getItem("cart")!=null){
        input = localStorage.getItem("cart");
        input.push(['12','None']);
        localStorage.setItem("cart", input); 
      }
      else {
        input = Array.new;
        input.push(['12','None']);
        localStorage.setItem("cart", input); 
      }
    }
    else if(localStorage.getItem('glazing')=='Sugar_milk'){
      document.getElementById("demo").setAttribute("src", "images/sugar-milk-original-12.JPG");
      if (localStorage.getItem("cart")!=null){
        input = localStorage.getItem("cart");
        input.push(['12','Sugar_milk']);
        localStorage.setItem("cart", input); 
      }
      else {
        input = Array.new;
        input.push(['12','Sugar_milk']);
        localStorage.setItem("cart", input); 
      }
    }
    else if(localStorage.getItem('glazing')=='Vanilla_milk'){
      document.getElementById("demo").setAttribute("src", "images/vanilla-milk-original-12.JPG");
      if (localStorage.getItem("cart")!=null){
        input = localStorage.getItem("cart");
        input.push(['12','Vanilla_milk']);
        localStorage.setItem("cart", input); 
      }
      else {
        input = Array.new;
        input.push(['12','Vanilla_milk']);
        localStorage.setItem("cart", input); 
      }
    }
    else if(localStorage.getItem('glazing')=='Double_chocolate'){
      document.getElementById("demo").setAttribute("src", "images/chocolate-original-12.JPG");
      if (localStorage.getItem("cart")!=null){
        input = localStorage.getItem("cart");
        input.push(['12','Double_chocolate']);
        localStorage.setItem("cart", input); 
      }
      else {
        input = Array.new;
        input.push(['12','Double_chocolate']);
        localStorage.setItem("cart", input); 
      }
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

