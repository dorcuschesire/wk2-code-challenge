document.addEventListener('DOMContentLoaded', function() {
    const shoppingForm = document.getElementById('shopping-form');
    const itemInput = document.getElementById('item');
    const shoppingList = document.getElementById('shopping-list');
    const clearButton = document.getElementById('clear');
  
    let items = [];
  
    // Function to add item to the shopping list
    function addItem(text) {
      const item = {
        id: Date.now().toString(),
        text: text,
        completed: false
      };
  
      items.push(item);
      addToLocalStorage(items);
      renderItems(items);
      itemInput.value = ''; // Clear input field after adding item
    }
  
    // Function to render items in the shopping list
    function renderItems(items) {
      shoppingList.innerHTML = '';
      items.forEach(item => {
        const li = document.createElement('li');
        li.setAttribute('data-id', item.id);
        li.classList.add('item');
        if (item.purchased) {
          li.classList.add('purchased');
        }
        li.textContent = item.text; // Set text content directly
        shoppingList.appendChild(li);
      });
    }
  
    // Function to toggle item completion status
    function toggleCompleted(id) {
      items = items.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      addToLocalStorage(items);
      renderItems(items);
    }
  
    // Function to delete item from the shopping list
    function deleteItem(id) {
      items = items.filter(item => item.id !== id);
      addToLocalStorage(items);
      renderItems(items);
    }
  
    // Function to edit item in the shopping list
    function editItem(id, newText) {
      items = items.map(item => {
        if (item.id === id) {
          item.text = newText;
        }
        return item;
      });
      addToLocalStorage(items);
      renderItems(items);
    }
  
    // Function to add items to local storage
    function addToLocalStorage(items) {
      localStorage.setItem('shoppingItems', JSON.stringify(items));
    }
  
    // Function to retrieve items from local storage
    function getFromLocalStorage() {
      const reference = localStorage.getItem('shoppingItems');
      if (reference) {
        items = JSON.parse(reference);
        renderItems(items);
      }
    }
  
    // Event listener for form submission to add new item
    shoppingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const text = itemInput.value.trim();
      if (text !== '') {
        addItem(text);
      } else {
        alert('Please enter an item.');
      }
    });
  
    // Event listener for clicking on the list items
    shoppingList.addEventListener('click', function(e) {
      if (e.target.tagName.toLowerCase() === 'li') {
        const id = e.target.getAttribute('data-id');
        toggleCompleted(id);
      }
    });
  
    // Event listener for clearing the entire shopping list
    clearButton.addEventListener('click', function() {
      if (confirm('Are you sure you want to clear the list?')) {
        items = [];
        addToLocalStorage(items);
        renderItems(items);
      }
    });
})