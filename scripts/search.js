
const search$ = document.getElementById('search');
search$.addEventListener('keyup', function(event) {
    // console.log(event)
    const term = search$.value;
    //console.log(term)
    const termLowerCase = term.toLowerCase();
    // console.log(termLowerCase);
    const productsFiltered = productsModified.filter(function(product) {
      const titleLowerCase = product.title.toLowerCase();
      return titleLowerCase.indexOf(termLowerCase) != -1;
    });
    renderProductCards(productsFiltered)
})