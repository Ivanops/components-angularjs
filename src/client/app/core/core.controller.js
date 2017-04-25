(function(){

  'use strict';

  angular
    .module('app')
    .controller('CoreController', CoreController);

  function CoreController() {
    var ctrl = this;
    ctrl.name = 'Core: this is my name';
    ctrl.firstName = 'Core: first name!!';
    ctrl.secondName = 'Core: second name';
    ctrl.secondActive = false;
    ctrl.firstActive = true;
    ctrl.clickFirst = clickFirst;
    ctrl.clickSecond = clickSecond;
    ctrl.updateName = updateName;
    ctrl.clickCore = clickCore;
    ctrl.$onInit = init;

    function init () {
      console.log('core init...');
    }

    function clickCore () {
      ctrl.name = 'Core: this is my name';
      ctrl.firstName = 'Core: first name!!';
      ctrl.secondName = 'Core: second name';
    }

    function clickFirst(){
      ctrl.secondActive = false;
      ctrl.firstActive = true;
    }

    function clickSecond(){
      ctrl.secondActive = true;
      ctrl.firstActive = false;
    }

    function updateName(coreName, firstName, secondName) {
      ctrl.name = coreName;
      ctrl.firstName = firstName;
      ctrl.secondName = secondName;
    }


  }
})();