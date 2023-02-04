// Función para exportar los datos a formato JSON
function exportData() {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const data = JSON.stringify(products);
    const a = document.createElement("a");
    const blob = new Blob([data], { type: "application/json" });
    a.href = URL.createObjectURL(blob);
    a.download = "backup.json";
    a.click();
  }
  
  // Botón para exportar los datos
  const exportButton = document.querySelector("#export-data");
  exportButton.addEventListener("click", exportData);
  
  // Función para importar los datos desde un archivo JSON
  function importData() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.addEventListener("change", function () {
      const reader = new FileReader();
      reader.onload = function () {
        const products = JSON.parse(reader.result);
        localStorage.setItem("products", JSON.stringify(products));
        // Mostrar un mensaje de éxito
        alert("Los datos han sido importados satisfactoriamente");
      };
      reader.readAsText(input.files[0]);
    });
    input.click();
  }
  
  // Botón para importar los datos
  const importButton = document.querySelector("#import-data");
  importButton.addEventListener("click", importData);