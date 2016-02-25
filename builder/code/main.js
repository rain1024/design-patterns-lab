var cityCar = new CarBuilder()
  .buildEngine("356 cc EA Straight-2")
  .buildPower("35hp")
  .buildExterior("normal")
  .buildBody("small")
  .buildWheel(4)
  .buildName("Honda Life")
  .getResult();
console.log(cityCar);

var sportCar = new CarBuilder()
  .buildEngine("4.4 L V8")
  .buildPower("560hp")
  .buildExterior("expensive")
  .buildBody("medium")
  .buildWheel(4)
  .buildName("BMW M5")
  .getResult();
console.log(sportCar);

var truck = new CarBuilder()
  .buildEngine("DDC/MTU 20V4000")
  .buildPower("3650hp")
  .buildExterior("medium")
  .buildBody("large")
  .buildWheel(8)
  .buildName("Liebherr T 282B")
  .getResult();
console.log(truck);
