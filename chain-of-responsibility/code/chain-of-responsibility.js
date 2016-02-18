/**
 * Created by rain on 2/18/2016.
 */


var manager = new Manager();
var director = new Director();
var vicePresident = new VicePresident();
var president = new President();

manager.setSuccessor(director);
director.setSuccessor(vicePresident);
vicePresident.setSuccessor(president);

request1 = new PurchaseRequest(5, "Pen");
manager.processRequest(request1);

request2 = new PurchaseRequest(15, "USB");
manager.processRequest(request2);

request3 = new PurchaseRequest(30, "Mug");
manager.processRequest(request3);

request4 = new PurchaseRequest(50, "Book");
manager.processRequest(request4);

request5 = new PurchaseRequest(80, "Wine");
manager.processRequest(request5);

