(function(){

  'use strict';

  angular
    .module('app')
    .controller('SecondController', SecondController);

  function SecondController() {
    var ctrl = this;
    ctrl.name = 'Second controller here';
  }
})();