(function(){

  'use strict';

  angular
    .module('app')
    .controller('CoreController', CoreController);

  function CoreController() {
    var ctrl = this;
    ctrl.name = 'Core controller here';
  }
})();