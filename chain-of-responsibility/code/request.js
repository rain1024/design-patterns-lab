function PurchaseRequest(amount, purpose) {
  this.amount = amount;
  this.purpose = purpose;

  this.getAmount = function () {
    return this.amount;
  }
}
