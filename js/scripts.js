const schemeSvg = document.querySelector('.scheme-svg');
let total = 0;
const ticketPrice = 800;
const totalPriceTag = document.querySelector('.price-total');
schemeSvg.addEventListener('click',(event)=>{
  if(event.target.tagName=="path"){
  if(!event.target.classList.contains('booked')){
   event.target.classList.toggle('active');
   total=schemeSvg.querySelectorAll('.active').length*ticketPrice;  
   totalPriceTag.textContent = total;
  }
  }
  
});

 