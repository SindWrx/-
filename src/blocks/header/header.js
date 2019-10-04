function Header(){
  document.querySelector('.cart').addEventListener('click', showCart);
  
  let closeButtons = document.querySelectorAll('.close-block');
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', closeCart);
  }

  document.querySelector('.catalog').addEventListener('click', showCatalog);

  let catalogCategories = document.querySelectorAll('.catalog-category');
  for (let i = 0; i < catalogCategories.length; i++) {
    catalogCategories[i].addEventListener('click', showCategory);
  }

  let menuIcons = document.querySelectorAll('.menu__icon');

  for (let i = 0; i < menuIcons.length; i++) {
    menuIcons[i].addEventListener('click', showMenu);
  }
}

function showCart(){
  let cartEmpty = this.parentElement.querySelector('.cart-empty'); 
  let cartFull = this.parentElement.querySelector('.cart-full'); 
  let cartItem = this.parentElement.querySelectorAll('.cart-item');

  if(cartItem.length === 0){
    cartEmpty.style.display = 'flex';
    setTimeout(() => {cartEmpty.style.opacity = 1}, 0);
  } else {
    cartFull.style.display = 'flex';
    setTimeout(() => {cartFull.style.opacity = 1}, 0);
  }
}

function closeCart(){
  let cart = this.parentElement; 

  setTimeout(() => {cart.style.opacity = 0}, 0);
  setTimeout(() => {cart.style.display = 'none';}, 1000);
}

function showCatalog(){
  let catalog = this.parentElement.querySelector('.catalog-window'); 
  catalog.style.display = 'block';
  setTimeout(() => {catalog.style.opacity = 1}, 0);
}

function showCategory(){
  let subcategories = this.nextElementSibling; 
  subcategories.style.display = 'block';
  setTimeout(() => {subcategories.style.height = 'auto'}, 0);
  this.querySelector('.icon-arrow').style.transform = 'rotate(0deg)';
}

function showMenu(){
  let bodyMenu = this.nextElementSibling;
  let bodyMenuItems = this.nextElementSibling.childNodes;

  for (let i = 0; i < bodyMenuItems.length; i++) {
    bodyMenuItems[i].style.display = 'block';
  }
  
  setTimeout(() => {bodyMenu.style.opacity = 1}, 0);
  bodyMenu.style.height = '170px';
}

export default Header;