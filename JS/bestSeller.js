const bestSeller = [
    {
        name: 'Red Velvet Dress',
        price: '610,000đ',
        img: './images/best-seller/Red Velvet Dress-1.jpeg',
        overlay: './images/best-seller/Red Velvet Dress-2.jpeg'
    },
    {
        name: 'Lily Dress',
        price: '620,000đ',
        img: './images/best-seller/Lily Dress-1.jpeg',
        overlay: './images/best-seller/Lily Dress-2.jpeg'
    },
    {
        name: 'Candy Dress',
        price: '450,000đ',
        img: './images/best-seller/Candy Dress-1.jpeg',
        overlay: './images/best-seller/Candy Dress-2.jpeg'
    },
    {
        name: 'Blue Eira Dress',
        price: '520,000đ',
        img: './images/best-seller/Blue Eira Dress-1.jpeg',
        overlay: './images/best-seller/Blue Eira Dress-2.jpeg'
    },
    {
        name: 'Hazel Dress',
        price: '550,000đ',
        img: './images/best-seller/Hazel Dress-1.jpeg',
        overlay: './images/best-seller/Hazel Dress-2.jpeg'
    },
    {
        name: 'Lauren Dress',
        price: '450,000đ',
        img: './images/best-seller/Lauren Dress-1.jpeg',
        overlay: './images/best-seller/Lauren Dress-2.jpeg'
    },
    {
        name: 'Joly Dress',
        price: '470,000đ',
        img: './images/best-seller/Joly Dress-1.jpeg',
        overlay: './images/best-seller/Joly Dress-2.jpeg'
    },
    {
        name: 'Furla Top',
        price: '390,000đ',
        img: './images/best-seller/Furla Top-1.jpeg',
        overlay: './images/best-seller/Furla Top-2.jpeg'
    },
    {
        name: 'Evelyn Top',
        price: '320,000đ',
        img: './images/best-seller/Evelyn Top-1.jpeg',
        overlay: './images/best-seller/Evelyn Top-2.jpeg'
    },
    {
        name: 'Dona Top',
        price: '310,000đ',
        img: './images/best-seller/Dona Top-1.jpeg',
        overlay: './images/best-seller/Dona Top-2.jpeg'
    },
    {
        name: 'Carol Top',
        price: '390,000đ',
        img: './images/best-seller/Carol Top-1.jpeg',
        overlay: './images/best-seller/Carol Top-2.jpeg'
    },
    {
        name: 'Adelina Dress',
        price: '640,000đ',
        img: './images/best-seller/Adelina Dress-1.jpeg',
        overlay: './images/best-seller/Adelina Dress-2.jpeg'
    },
    {
        name: 'Caven Top',
        price: '390,000đ',
        img: './images/best-seller/Caven Top-1.jpeg',
        overlay: './images/best-seller/Caven Top-2.jpeg'
    },
    {
        name: 'Mori Dress',
        price: '590,000đ',
        img: './images/best-seller/Mori Dress-1.jpeg',
        overlay: './images/best-seller/Mori Dress-2.jpeg'
    },
    {
        name: 'Nikki Top',
        price: '420,000đ',
        img: './images/best-seller/Nikki Top-1.jpeg',
        overlay: './images/best-seller/Nikki Top-2.jpeg'
    },
    {
        name: 'Darcie Top',
        price: '360,000đ',
        img: './images/best-seller/Darcie Top-1.jpeg',
        overlay: './images/best-seller/Darcie Top-2.jpeg'
    },
    {
        name: 'Furla Skirt',
        price: '350,000đ',
        img: './images/best-seller/Furla Skirt-1.jpeg',
        overlay: './images/best-seller/Furla Skirt-2.jpeg'
    },
    {
        name: 'Golden Dress',
        price: '660,000đ',
        img: './images/best-seller/Golden Dress-1.jpeg',
        overlay: './images/best-seller/Golden Dress-2.jpeg'
    },
    {
        name: 'Icy Top',
        price: '470,000đ',
        img: './images/best-seller/Icy Top-1.jpeg',
        overlay: './images/best-seller/Icy Top-2.jpeg'
    },
    {
        name: 'Rita Top',
        price: '540,000đ',
        img: './images/best-seller/Rita Top-1.jpeg',
        overlay: './images/best-seller/Rita Top-2.jpeg'
    },
    {
        name: 'Red Callie Dress',
        price: '510,000đ',
        img: './images/best-seller/Red Callie Dress-1.jpeg',
        overlay: './images/best-seller/Red Callie Dress-2.jpeg'
    },
    {
        name: 'Jia Top',
        price: '350,000đ',
        img: './images/best-seller/Jia Top-1.jpeg',
        overlay: './images/best-seller/Jia Top-2.jpeg'
    },
    {
        name: 'Vicky Top',
        price: '390,000đ',
        img: './images/best-seller/Vicky Top-1.jpeg',
        overlay: './images/best-seller/Vicky Top-2.jpeg'
    },
    {
        name: 'Bubble Dress',
        price: '640,000đ',
        img: './images/best-seller/Bubble Dress-1.jpeg',
        overlay: './images/best-seller/Bubble Dress-2.jpeg'
    },
]
var htmlsBestSeller = bestSeller.map(item => {
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
var htmlBestSeller = htmlsBestSeller.join('');
document.querySelector('.product-best-seller').innerHTML = htmlBestSeller;

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