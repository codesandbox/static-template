const productsWinter = [
    {
        name: 'Light Blue Mary Dress',
        price: '490,000đ',
        img: './images/products-winter/Light Blue Mary Dress-1.jpeg',
        overlay: './images/products-winter/Light Blue Mary Dress-2.jpeg'
    },
    {
        name: 'Mori Dress',
        price: '590,000đ',
        img: './images/products-winter/Mori Dress-1.jpeg',
        overlay: './images/products-winter/Mori Dress-2.jpeg'
    },
    {
        name: 'Cherry Top',
        price: '380,000đ',
        img: './images/products-winter/Cherry Top-1.jpeg',
        overlay: './images/products-winter/Cherry Top-2.jpeg'
    },
    {
        name: 'Ruby Top',
        price: '390,000đ',
        img: './images/products-winter/Ruby Top-1.jpeg',
        overlay: './images/products-winter/Ruby Top-2.jpeg'
    },
    {
        name: 'Skylar Dress',
        price: '480,000đ',
        img: './images/products-winter/Skylar Dress-1.jpeg',
        overlay: './images/products-winter/Skylar Dress-2.jpeg'
    },
    {
        name: 'Golden Dress',
        price: '660,000đ',
        img: './images/products-winter/Golden Dress-1.jpeg',
        overlay: './images/products-winter/Golden Dress-2.jpeg'
    },
]
var htmls = productsWinter.map(item => {
    return `
    <div class="col l-4">
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
                    <span>${item.price}}</span>
                </div>
            </div>
        </div>
    </div>
    `
});
var html = htmls.join('');
document.querySelector('.products-winter').innerHTML = html;