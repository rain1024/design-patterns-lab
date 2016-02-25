function Factory(){}

Factory.products = {
   "phone": Phone,
   "car": Car
}

Factory.create = function(type, name, price){
    return new this.products[type](name, price);
}