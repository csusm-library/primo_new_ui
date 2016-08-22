(function () {
    "use strict";
    'use strict';

    var app = angular.module('viewCustom', ['angularLoad']);
      app.controller('prmLogoAfterController', [function () {

        var vm = this;

        vm.getIconLink = getIconLink;

        function getIconLink() {
          return vm.parentCtrl.iconLink;
        }
      }]);

      app.component('prmLogoAfter',{

        bindings: {parentCtrl: '<'},

        controller: 'prmLogoAfterController',

        template: `<div class="product-logo product-logo-local" layout="row" layout-align="start center" layout-fill id="banner" tabindex="0" role="banner">

        <a href="https://biblio.csusm.edu/">

        <img class="logo-image" alt="{{::('nui.header.LogoAlt' | translate)}}" ng-src="{{$ctrl.getIconLink()}}"/>

        </a>

        </div>`

      });

    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/

})();