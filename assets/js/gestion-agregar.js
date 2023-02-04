//Agregar
const form = document.querySelector("#add-product form");

var maxId = (JSON.parse(localStorage.getItem("products")) || []).reduce(
  (max, p) => (p.id > max ? p.id : max),
  0
);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const productName = document.querySelector("#product-name").value;
  const productQuantity = document.querySelector("#product-quantity").value;
  const productCat = document.querySelector("#product-cat").value;

  if (!productName || !productQuantity || !productCat) {
    alert("Debe completar todos los campos para agregar un producto");
    return;
  }

  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.push({
    id: ++maxId,
    name: productName,
    quantity: productQuantity,
    category: productCat,
  });
  localStorage.setItem("products", JSON.stringify(products));
  alert("Producto agregado satisfactoriamente");
});
