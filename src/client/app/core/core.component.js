(function(){

  'use strict';

  var component = {
    templateUrl: 'app/core/core.html',
    controller: 'CoreController'
  }

  angular
    .module('app')
    .component('coreComponent', component);

})();