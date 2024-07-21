document.addEventListener("DOMContentLoaded", function() {
  
  const shoppingList = document.getElementById("shopping-list");

  
  shoppingList.addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
          event.target.classList.toggle("purchased");
      }
  });


  const addItemButton = document.getElementById("add");
  addItemButton.addEventListener("click", function() {
      const newItem = document.getElementById("item").value.trim();

      if (newItem !== "") {
          
          const li = document.createElement("li");
          li.textContent = newItem;

      
          shoppingList.appendChild(li);

      
          document.getElementById("item").value = "";
      }
  });

  
  const clearListButton = document.getElementById("clear");
  clearListButton.addEventListener("click", function() {
      
      shoppingList.innerHTML = "";
  });

  
  const initialPurchasedItems = document.querySelectorAll("#shopping-list li.purchased");
  initialPurchasedItems.forEach(function(item) {
      item.classList.add("purchased");
  });
});