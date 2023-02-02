const products = [
    {
      id : 1,
      title: "Macbook",
      image:
        "https://demo.opencart.com/image/cache/catalog/demo/macbook_1-200x200.jpg",
      description:
        "Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..",
      price: 10800,
    },
    {
      id : 2,
      title: "Iphone",
      image:
        "https://demo.opencart.com/image/cache/catalog/demo/iphone_1-200x200.jpg",
      description:
        "iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..",
      price: 15000,
    },
    {
      id : 3,
      title: "Apple cinema",
      image:
        "https://demo.opencart.com/image/cache/catalog/demo/apple_cinema_30-200x200.jpg",
      description:
        "The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..",
      price: 12000,
    },
    {
      id : 4,
      title: "Epson",
      image:
        "https://demo.opencart.com/image/cache/catalog/demo/canon_eos_5d_1-200x200.jpg",
      description:
        "Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..",
      price: 32000,
    },
  ]
  function captureFavouriteButtonClick() {
    const products$ = document.getElementById("products");
    const favouriteButton$ = products$.querySelectorAll(".btn-favourite");
    favouriteButton$.forEach(function(btn$) {
      btn$.addEventListener("click", function(event) {
        // alert("ok")
        const target = event.target;
        const favouriteBtn$ = target.closest(".btn-favourite"); 
        const selectedId = favouriteBtn$.getAttribute("data-id");
        console.log(selectedId);
        const selectedProductIndex = selectedProductIds.indexOf(selectedId);
        const icon$ = btn$.querySelector(".material-icons-outlined");
        if (selectedProductIndex != -1) { 
          //means product is already selected
          selectedProductIds.splice(selectedProductIndex, 1);  
          icon$.innerText = 'favorite_border'      
        }
        else {
          // means product is not selected
          selectedProductIds.push(selectedId);
          icon$.innerText = 'favorite';
        }
        console.log(selectedProductIds)
        const wishlistCounter$ = document.getElementById("wishlistCount");
        
        
        wishlistCounter$.innerText = selectedProductIds.length;
      })
    })
  }
  const selectedProductIds = [];
const productsElement = document.getElementById("products");
const productsModified = products.map(function (product) {
  product.priceModified = product.price.toFixed(2)
  return product
})
renderProductCards(productsModified)

function renderProductCards(products) {
  let productCards = ""

  for (let i = 0; i < products.length; i++) {
    productCards = productCards + renderProductCard(products[i])
  }
  productsElement.innerHTML = productCards;
  captureFavouriteButtonClick();
}

function renderProductCard(product) {
  return `<div class="col-12 col-md-4 col-lg-3">
    <div class="card">
      <img
        src="${product.image}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">
         ${product.description}
        </p>
        <div>
        <strong><span class="material-icons-outlined">
        currency_rupee
        </span>${product.priceModified}</strong>
        </div>
        <div
          class="btn-group w-100"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" class="btn">
            <span class="material-icons-outlined">
              shopping_cart_checkout
            </span>
          </button>
          <button type="button" class="btn btn-favourite" data-id="${product.id}" >
            <span class="material-icons-outlined"> favorite_border </span>
          </button>
          <button type="button" class="btn">
            <span class="material-icons-outlined"> compare_arrows </span>
          </button>
        </div>
      </div>
    </div>
    </div>`
}

  
  
  
  