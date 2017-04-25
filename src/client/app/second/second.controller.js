(function(){

  'use strict';

  angular
    .module('app')
    .controller('SecondController', SecondController);

  function SecondController() {
    var ctrl = this;
    ctrl.$onInit = init;

    function init () {
      console.log('second init...');
    }
  }
})();