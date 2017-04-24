(function(){

  'use strict';

  var component = {
    templateUrl: 'app/second/second.html',
    controller: 'SecondController'
  }

  angular
    .module('app')
    .component('secondComponent', component);

})();