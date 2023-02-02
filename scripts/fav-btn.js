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