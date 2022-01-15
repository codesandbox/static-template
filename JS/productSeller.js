const productsSeller = [
    {
        name: 'Lily Dress',
        price: '620,000đ',
        img: './images/products-seller/Lily Dress-1.jpeg',
        overlay: './images/products-seller/Lily Dress-2.jpeg'
    },
    {
        name: 'Evelyn Top',
        price: '320,000đ',
        img: './images/products-seller/Evelyn Top-1.jpeg',
        overlay: './images/products-seller/Evelyn Top-2.jpeg'
    },
    {
        name: 'Dona Top',
        price: '310,000đ',
        img: './images/products-seller/Dona Top-1.jpeg',
        overlay: './images/products-seller/Dona Top-2.jpeg'
    },
    {
        name: 'Blue Eira Dress',
        price: '520,000đ',
        img: './images/products-seller/Blue Eira Dress-1.jpeg',
        overlay: './images/products-seller/Blue Eira Dress-2.jpeg'
    },
    {
        name: 'Mori Dress',
        price: '590,000đ',
        img: './images/products-seller/Mori Dress-1.jpeg',
        overlay: './images/products-seller/Mori Dress-2.jpeg'
    },
    {
        name: 'Caven Top',
        price: '390,000đ',
        img: './images/products-seller/Caven Top-1.jpeg',
        overlay: './images/products-seller/Caven Top-2.jpeg'
    },
]
var htmls = productsSeller.map(item => {
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
document.querySelector('.products-seller').innerHTML = html;