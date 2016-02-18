/**
 * Created by rain on 2/18/2016.
 */

function On(){
  this.click = function(context){
    console.log("Turn On");
    context.setState(new Off());
  }
}

function Off(){
  this.click = function(){
    console.log("Turn Off");
    context.setState(new On());
  }

}

function Context(){
  this.current = new Off();

  this.setState = function(state){
    this.current = state;
  };

  this.click = function(){
    this.current.click(context);
  }
}
var context = new Context();
context.click();
context.click();
context.click();
context.click();

