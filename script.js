class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
}



class PerishableProduct extends Product {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity); 
    this.expirationDate = expirationDate;
  }

  toString() {
    return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
  }
}

const milk = new PerishableProduct("Milk", 1.50, 10, "2024-12-31");
console.log(milk.toString());
const butter = new PerishableProduct("Butter", 2.00, 5, "2024-12-31");
console.log(butter.toString());
const products = [milk, butter];



static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price = product.price * discount;
        });
    }




class Store {
    constructor() {
        this.inventory = [];
    }

    addProduct(product) {
        this.inventory.push(product);
    }}
getInventoryValue()
{
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }

    findProductByName(Name) 
    {
        const found = this.inventory.find(product => product.Name.toLowerCase() === Name.toLowerCase());
        return found || null;
    }

// referring product as p

const p1 = new Product("Apples", 2.50, 50);
const p2 = new Product("Bananas", 1.20, 50);
const p3 = new Product("Oranges", 1.80, 50);
const p4 = new Product("Milk", 1.50, 10);
const p5 = new Product("Butter", 2.00, 5);


myStore.addProduct(p1);
myStore.addProduct(p2);

myStore.addProduct(p3);
myStore.addProduct(p4);

myStore.addProduct(p5);

// print

console.log("Inventory");

