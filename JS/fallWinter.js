const fallWinter = [
    {
        name: 'Light Blue Mary Dres',
        price: '490,000đ',
        img: './images/collection-fall-winter/Light Blue Mary Dress-1.jpeg',
        overlay: './images/collection-fall-winter/Light Blue Mary Dress-2.jpeg'
    },
    {
        name: 'Mori Dress',
        price: '590,000đ',
        img: './images/collection-fall-winter/Mori Dress-1.jpeg',
        overlay: './images/collection-fall-winter/Mori Dress-2.jpeg'
    },
    {
        name: 'Cherry Top',
        price: '380,000đ',
        img: './images/collection-fall-winter/Cherry Top-1.jpeg',
        overlay: './images/collection-fall-winter/Cherry Top-2.jpeg'
    },
    {
        name: 'Skylar Dress',
        price: '480,000đ',
        img: './images/collection-fall-winter/Skylar Dress-1.jpeg',
        overlay: './images/collection-fall-winter/Skylar Dress-2.jpeg'
    },
    {
        name: 'Golden Dress',
        price: '660,000đ',
        img: './images/collection-fall-winter/Golden Dress-1.jpeg',
        overlay: './images/collection-fall-winter/Golden Dress-2.jpeg'
    },
    {
        name: 'Ruby Top',
        price: '390,000đ',
        img: './images/collection-fall-winter/Ruby Top-1.jpeg',
        overlay: './images/collection-fall-winter/Ruby Top-2.jpeg'
    },
    {
        name: 'Blue Eira Dress',
        price: '520,000đ',
        img: './images/collection-fall-winter/Blue Eira Dress-1.jpeg',
        overlay: './images/collection-fall-winter/Blue Eira Dress-2.jpeg'
    },
    {
        name: 'Rita Top',
        price: '540,000đ',
        img: './images/collection-fall-winter/Rita Top-1.jpeg',
        overlay: './images/collection-fall-winter/Rita Top-2.jpeg'
    },
    {
        name: 'Golden Top',
        price: '390,000đ',
        img: './images/collection-fall-winter/Golden Top-1.jpeg',
        overlay: './images/collection-fall-winter/Golden Top-2.jpeg'
    },
    {
        name: 'Vicky Top',
        price: '390,000đ',
        img: './images/collection-fall-winter/Vicky Top-1.jpeg',
        overlay: './images/collection-fall-winter/Vicky Top-2.jpeg'
    },
    {
        name: 'Red Callie Dress',
        price: '510,000đ',
        img: './images/collection-fall-winter/Red Callie Dress-1.jpeg',
        overlay: './images/collection-fall-winter/Red Callie Dress-2.jpeg'
    },
    {
        name: 'Bubble Dress',
        price: '640,000đ',
        img: './images/collection-fall-winter/Bubble Dress-1.jpeg',
        overlay: './images/collection-fall-winter/Bubble Dress-2.jpeg'
    },
    {
        name: 'Icy Top',
        price: '470,000đ',
        img: './images/collection-fall-winter/Icy Top-1.jpeg',
        overlay: './images/collection-fall-winter/Icy Top-2.jpeg'
    },
    {
        name: 'Jia Top',
        price: '350,000đ',
        img: './images/collection-fall-winter/Jia Top-1.jpeg',
        overlay: './images/collection-fall-winter/Jia Top-2.jpeg'
    },
    {
        name: 'Furla Top',
        price: '390,000đ',
        img: './images/collection-fall-winter/Furla Top-1.jpeg',
        overlay: './images/collection-fall-winter/Furla Top-2.jpeg'
    },
    {
        name: 'Furla Skirt',
        price: '350,000đ',
        img: './images/collection-fall-winter/Furla Skirt-1.jpeg',
        overlay: './images/collection-fall-winter/Furla Skirt-2.jpeg'
    },
    {
        name: 'Carol Top',
        price: '390,000đ',
        img: './images/collection-fall-winter/Carol Top-1.jpeg',
        overlay: './images/collection-fall-winter/Carol Top-2.jpeg'
    },
    {
        name: 'Darcie Top',
        price: '360,000đ',
        img: './images/collection-fall-winter/Darcie Top-1.jpeg',
        overlay: './images/collection-fall-winter/Darcie Top-2.jpeg'
    },
    {
        name: 'Lyla Skort',
        price: '390,000đ',
        img: './images/collection-fall-winter/Lyla Skort-1.jpeg',
        overlay: './images/collection-fall-winter/Lyla Skort-2.jpeg'
    },
    {
        name: 'Brown Lyla Skort',
        price: '350,000đ',
        img: './images/collection-fall-winter/Brown Lyla Skort-1.jpeg',
        overlay: './images/collection-fall-winter/Brown Lyla Skort-2.jpeg'
    },
]
var htmls = fallWinter.map(item => {
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
var html = htmls.join('');
document.querySelector('.product-fall-winter').innerHTML = html;


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