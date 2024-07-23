const products = document.getElementsByClassName('products')[0]
const sublistproducts = document.getElementsByClassName('sub-list-products')[0]

products.addEventListener('click', () => {
    sublistproducts.classList.toggle('active');
}
)

const hamburger = document.getElementsByClassName('hamburger')[0]
const navs = document.getElementsByClassName('navs')[0]

hamburger.addEventListener('click', () =>{
    navs.classList.toggle('active');
})