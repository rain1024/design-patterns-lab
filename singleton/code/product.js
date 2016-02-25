function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Phone(name, price) {
  Product.call(this, name, price);
}
Phone.prototype = Object.create(Product.prototype);
Phone.prototype.constructor = Phone;
Phone.prototype.call = function () {
  console.log("reng reng");
};

function Car(name, price) {
  Product.call(this, name, price);
}
Car.prototype = Object.create(Product.prototype);
Car.prototype.constructor = Car;
Car.prototype.run = function () {
  console.log("brum brum");
};
