PurchasePower = function () {
  this.successor = null;

  this.setSuccessor = function (successor) {
    this.successor = successor;
  };

  this.processRequest = function () {
  }
};
PurchasePower.BASE = 1;

Manager = function () {
  PurchasePower.call(this);

  this.ALLOWABLE = 10 * PurchasePower.BASE;

  this.processRequest = function (request) {
    if (request.getAmount() <= this.ALLOWABLE) {
      console.log("Manager will approve $" + request.getAmount());
    } else {
      this.successor.processRequest(request);
    }
  }
};
Manager.prototype = Object.create(PurchasePower.prototype);
Manager.prototype.constructor = Manager;

function Director() {
  PurchasePower.call(this);
  this.ALLOWABLE = 20 * PurchasePower.BASE;

  this.processRequest = function (request) {
    if (request.getAmount() <= this.ALLOWABLE) {
      console.log("Director will approve $" + request.getAmount());
    } else {
      this.successor.processRequest(request);
    }
  }
}
Director.prototype = Object.create(PurchasePower.prototype);
Director.prototype.constructor = Director;

function VicePresident() {
  PurchasePower.call(this);
  this.ALLOWABLE = 40 * PurchasePower.BASE;

  this.processRequest = function (request) {
    if (request.getAmount() <= this.ALLOWABLE) {
      console.log("VicePresident will approve $" +
        request.getAmount());
    } else {
      this.successor.processRequest(request);
    }
  }
}
VicePresident.prototype = Object.create(PurchasePower.prototype);
VicePresident.prototype.constructor = VicePresident;

function President() {
  PurchasePower.call(this);
  this.ALLOWABLE = 60 * PurchasePower.BASE;

  this.processRequest = function (request) {
    if (request.getAmount() <= this.ALLOWABLE) {
      console.log("President will approve $" + request.getAmount());
    } else {
      console.log("Your request for $" + request.getAmount(),
        "needs a board meetings!");
    }
  }
}
President.prototype = Object.create(PurchasePower.prototype);
President.prototype.constructor = President;
