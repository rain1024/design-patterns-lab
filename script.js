/**
 * Created by rain on 2/18/2016.
 */
var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
  $.getJSON("patterns.json")
    .done(function (items) {
      $scope.patterns = items.rows;
      $scope.$apply();
    })
    .fail(function(j, text, e){
      console.log(e);
    })
});