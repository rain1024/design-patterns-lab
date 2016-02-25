function CarBuilder() {
  this.car = new Car();

  this.buildEngine = function (engine) {
    this.car.engine = engine;
    return this;
  };
  this.buildPower = function (power) {
    this.car.power = power;
    return this;
  };
  this.buildBody = function (body) {
    this.car.body = body;
    return this;
  };
  this.buildExterior = function (exterior) {
    this.car.exterior = exterior;
    return this;
  };
  this.buildWheel = function (wheel) {
    this.car.wheel = wheel;
    return this;
  };
  this.buildName = function (name) {
    this.car.name = name;
    return this;
  };
  this.getResult = function () {
    return this.car;
  };
}

