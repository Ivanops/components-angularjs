(function(){

  'use strict';

  angular
    .module('app')
    .controller('FirstController', FirstController);

  function FirstController() {
    var ctrl = this;
    ctrl.changeName = changeName;

    ctrl.$onInit = init;

    function init () {
      console.log('first init...');
    }

    function changeName() {
      ctrl.updateName({coreName:'First: core name', firstName:'First: this is my name', secondName:'First: second name'});
    }
  }
})();