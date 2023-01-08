const menu = [
    {
        id: 1,
        title: "Caffè Americano",
        category: "Hot Drinks",
        price: "3.90€",
        img: "001.jpeg",
    },
    {
        id: 2,
        title: "Cappuccino",
        category: "Hot Drinks",
        price: "4.90€",
        img: "002.jpeg",
    },
    {
        id: 3,
        title: "Caffè Latte",
        category: "Hot Drinks",
        price: "4.90€",
        img: "003.jpeg",
    },
    {
        id: 4,
        title: "Pumpkin Spice Latte",
        category: "Seasonal Drinks",
        price: "5.50€",
        img: "004.jpeg",
    },
    {
        id: 5,
        title: "Gingerbread Latte",
        category: "Seasonal Drinks",
        price: "5.50€",
        img: "005.jpeg",
    },
    {
        id: 6,
        title: "Iced Cinnamon Latte",
        category: "Seasonal Drinks",
        price: "4.90€",
        img: "006.jpeg",
    },
    {
        id: 7,
        title: "Iced Coffee",
        category: "Cold Drinks",
        price: "4.00€",
        img: "007.jpeg",
    },
    {
        id: 8,
        title: "Iced Caffè Latte",
        category: "Cold Drinks",
        price: "4.50€",
        img: "008.jpeg",
    },
    {
        id: 9,
        title: "Iced Macchiato",
        category: "Cold Drinks",
        price: "4.50€",
        img: "009.jpeg",
    },
    {
        id: 10,
        title: "Vanilla Caffè Latte",
        category: "Hot Drinks",
        price: "5.50€",
        img: "010.jpeg",
    }
];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

// load items
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `            <article class="menu-item">
        <img src="${item.img}" class="photo" alt="${item.title}">
        <div class="item-info">
            <header>
                <h2 class="product">${item.title}</h2>
                <h2 class="price">${item.price}</h2>
            </header>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    // fill section center with menu items
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
        // if category not yet in values, it will be added into it
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']);
    const categoryBtns = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    })
        .join("");
    // fill button container with buttons
    btnContainer.innerHTML = categoryBtns;

    // filter items
    const filterBtns = btnContainer.querySelectorAll('.filter-btn');
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            // select the clicked button's data-id as its category
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === 'all') {
                displayMenuItems(menu);
            }
            else {
                displayMenuItems(menuCategory);
            }
        });
    });
}