(function(){

  'use strict';

  var component = {
    templateUrl: 'app/first/first.html',
    controller: 'FirstController',
    bindings: {
      updateName: '&',
      name: '<'
    }
    
  }

  angular
    .module('app')
    .component('firstComponent', component);

})();