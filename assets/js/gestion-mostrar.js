//Mostrar
const searchForm = document.querySelector("#search-product form");
const searchInput = document.querySelector("#search-query");
const productList = document.querySelector("#product-list");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchTerm = searchInput.value.toLowerCase();
  let products = JSON.parse(localStorage.getItem("products")) || [];

  productList.innerHTML = "";

  if (!searchTerm) {
    renderProduct(products);
    return;
  }

  products = products.filter((product) => {
    return (
      product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
      product.id == searchTerm
    );
  });

  renderProduct(products);
});

function renderProduct(products) {
  const productList = document.querySelector("#product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${product.id}</td><td>${product.name}</td> <td>${product.quantity}</td> <td>${product.category}</td> <td><button onclick="deleteProduct(${product.id})">Eliminar</button></td>`;
    productList.appendChild(tr);
  });
}

function deleteProduct(id) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  products = products.filter((product) => product.id !== id);
  localStorage.setItem("products", JSON.stringify(products));
  renderProduct(products);
}

// function renderProduct(product) {
//   const tr = document.createElement("tr");

//   tr.innerHTML = `<td>${product.id}</td><td>${product.name}</td> <td>${product.quantity}</td> <td>${product.category}</td> <td><button class="delete-button" data-id="${product.id}">Eliminar</button></td>`;
//   tr.querySelector(".delete-button").addEventListener("click", function () {
//     let products = JSON.parse(localStorage.getItem("products")) || [];
//     products = products.filter((p) => p.id != product.id);
//     localStorage.setItem("products", JSON.stringify(products));
//     searchForm.submit();
//   });

//   productList.appendChild(tr);
// }

// function renderProduct(product) {
//   const tr = document.createElement("tr");

//   tr.innerHTML = `<td>${product.id}</td><td>${product.name}</td> <td>${product.quantity}</td> <td>${product.category}</td>`;

//   productList.appendChild(tr);
// }
