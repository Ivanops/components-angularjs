(function(){

  'use strict';

  var component = {
    templateUrl: 'app/first/first.html',
    controller: 'FirstController'
  }

  angular
    .module('app')
    .component('firstComponent', component);

})();