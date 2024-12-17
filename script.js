class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
    
    addItem(product, quantity) {
      
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity; 
      } else {
        const newItem = new ShoppingCartItem(product, quantity);
        this.items.push(newItem);
      }
    }
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotal() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    displayCart() {
      console.log("Contenu du panier :");
      this.items.forEach(item => {
        console.log(
          `Produit : ${item.product.name}, Prix unitaire : ${item.product.price}€, Quantité : ${item.quantity}, Total : ${item.getTotalPrice()}€`
        );
      });
      console.log(`Total du panier : ${this.getTotal()}€`);
    }
  }

  const product1 = new Product(1, "Ordinateur Portable", 1200);
  const product2 = new Product(2, "Souris Sans Fil", 25);
  const product3 = new Product(3, "Clavier Mécanique", 75);
  
  const cart = new ShoppingCart();
  
  cart.addItem(product1, 1);
  cart.addItem(product2, 2);
  cart.addItem(product3, 1);
  

  cart.displayCart();
  
  console.log("\nSuppression de la souris sans fil...");
  cart.removeItem(2);
  
  cart.displayCart();
  