(function(){

  'use strict';

  var component = {
    templateUrl: 'app/second/second.html',
    controller: 'SecondController',
    bindings: {
      name: '<'
    }
  }

  angular
    .module('app')
    .component('secondComponent', component);

})();