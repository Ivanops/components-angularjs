(function(){

  'use strict';

  angular
    .module('app')
    .controller('FirstController', FirstController);

  function FirstController() {
    var ctrl = this;
    ctrl.name = 'First controller here';
  }
})();