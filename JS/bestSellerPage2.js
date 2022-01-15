const bestSellerPage2 = [
    {
        name: 'Ruby Top',
        price: '390,000đ',
        img: './images/best-seller/Ruby Top-1.jpeg',
        overlay: './images/best-seller/Ruby Top-2.jpeg'
    },
    {
        name: 'Golden Top',
        price: '390,000đ',
        img: './images/best-seller/Golden Top-1.jpeg',
        overlay: './images/best-seller/Golden Top-2.jpeg'
    },
    {
        name: 'Skylar Dress',
        price: '480,000đ',
        img: './images/best-seller/Skylar Dress-1.jpeg',
        overlay: './images/best-seller/Skylar Dress-2.jpeg'
    },
    {
        name: 'Cherry Top',
        price: '380,000đ',
        img: './images/best-seller/Cherry Top-1.jpeg',
        overlay: './images/best-seller/Cherry Top-2.jpeg'
    },
    {
        name: 'Light Blue Mary Dress',
        price: '490,000đ',
        img: './images/best-seller/Light Blue Mary Dress-1.jpeg',
        overlay: './images/best-seller/Light Blue Mary Dress-2.jpeg'
    }
]
var htmlsBestSellerPage2 = bestSellerPage2.map(item => {
    return `
    <div class="col l-3">
        <div class="product">
            <a href="#home" class="product-item">
                <div class="product-image">
                    <img src="${item.img}" alt="${item.name}" class="product-img img-1"/>
                    <div class="overlay">
                        <img src="${item.overlay}" alt="${item.name}" class="product-img img-2"/>                                      
                        <button type="button" class="btn btn-buy">XEM NHANH</button>
                    </div>
                </div>
            </a>
            <div class="product-content">
                <a class="product-content-link" href="#home"><h2>${item.name}</h2></a>
                <div class="product-content-price">
                    <span>${item.price}</span>
                </div>
            </div>
        </div>
    </div>
    `
});
var htmlBestSellerPage2 = htmlsBestSellerPage2.join('');
document.querySelector('.product-best-seller-page-2').innerHTML = htmlBestSellerPage2;

/* CLOSE - OPEN TOOLBAR */
var toolbarOption = document.querySelector('.toolbar-option');
var toolbarOptionList = document.querySelector('.toolbar-option-list');
var productsFallWinter = document.querySelector('.App');
function showToolbarOption() {
    toolbarOptionList.classList.toggle('active');
}
function closeToolbarOption() {
    toolbarOptionList.classList.remove('active');
}
toolbarOption.addEventListener('click', showToolbarOption);
productsFallWinter.addEventListener('click', closeToolbarOption);
toolbarOption.onclick = (e) => (e.stopPropagation())