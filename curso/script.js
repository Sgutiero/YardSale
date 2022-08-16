const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close'); 
const mobileMenu = document.querySelector('.mobile-menu');
const carritoMenu = document.querySelector('.navbar-shopping-cart');
const shoppingContainer = document.querySelector('#shoppingContainer');
const productDetailContainer = document.querySelector('#productDetail');
const seccion = document.querySelector('.cards-container');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
carritoMenu.addEventListener('click',toggleAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside); 



function toggleDesktopMenu () {
    const isAsideClose = shoppingContainer.classList.contains('inactive');
    if(!isAsideClose) {
        shoppingContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    const isAsideClose = shoppingContainer.classList.contains('inactive');
     if(!isAsideClose) {
        shoppingContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

function toggleAside () {
    const isMobileClose = shoppingContainer.classList.contains('inactive');
     if(!isMobileClose) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
     if(!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    shoppingContainer.classList.toggle('inactive');
}



function openProductDetailAside(){
    shoppingContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');

}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productArray = [] 
    productArray.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });

    productArray.push({
        name: 'Laptop',
        price: 250,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });

    productArray.push({
        name: 'Wifi Mesh',
        price: 180,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });
    
        function renderProducts(arr){
        
            for (product of arr){
    
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
        
        
            const productImage= document.createElement('img');
            productImage.setAttribute('src', product.image);
            productImage.addEventListener('click', openProductDetailAside);
        
           
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
        
            const productInfoDiv = document.createElement('div');
        
            const productPrice = document.createElement('p');
            productPrice.innerText = '$' + product.price;
        
            const productName = document.createElement('p');
            productName.innerText = product.name; 
        
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productName);
        
            const productFigure = document.createElement('figure');
        
            const productImg = document.createElement('img');
            productImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        
            productFigure.appendChild(productImg);
        
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productFigure);
        
            productCard.appendChild(productImage);
            productCard.appendChild(productInfo);
        
            seccion.appendChild(productCard);
           
          }
        }

        renderProducts(productArray);
        
 

