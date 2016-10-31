(function () {
    "use strict";
    'use strict';

    var app = angular.module('viewCustom', ['angularLoad']);
    app.config(['$compileProvider',
      function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
    }]);
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

    //Add RIS Export

    app.controller('prmActionListAfterController', [function () {
      var vm = this;
      var items = vm.parentCtrl.item.length;
      vm.getRIS = getRIS;

      
      
      function getRIS() {
        var RIS = "";
        
        if (typeof items !== 'undefined') {
          

        for (var c = 0; c < items; c++) {
            if (typeof vm.parentCtrl.item[c].pnx.addata.au !== 'undefined') {var totalau = vm.parentCtrl.item[c].pnx.addata.au.length; }
          if (typeof vm.parentCtrl.item[c].pnx.addata.addau !== 'undefined') {var totaladdau = vm.parentCtrl.item[c].pnx.addata.addau.length; }
            RIS += "TY  - " + vm.parentCtrl.item[c].pnx.addata.ristype[0] + "\r\n";
          if (typeof vm.parentCtrl.item[c].pnx.addata.addau !== 'undefined' && typeof totaladdau !== 'undefined') { 
            for (var y = 0; y < totaladdau; y++) {
              RIS += "AU  - " + vm.parentCtrl.item[c].pnx.addata.addau[y] + "\r\n"; 
            }
          }

          if (typeof vm.parentCtrl.item[c].pnx.addata.au !== 'undefined' && typeof totalau !== 'undefined') { 
            for (var z = 0; z < totalau; z++) {
              RIS += "AU  - " + vm.parentCtrl.item[c].pnx.addata.au[z] + "\r\n"; 
            }
          }
          if (typeof vm.parentCtrl.item[c].pnx.addata.btitle !== 'undefined') { RIS += "TI  - " + vm.parentCtrl.item[c].pnx.addata.btitle[0] + "\r\n"; } 
          if (typeof vm.parentCtrl.item[c].pnx.addata.addtitle !== 'undefined') { RIS += "T2  - " + vm.parentCtrl.item[c].pnx.addata.addtitle[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item[c].pnx.addata.jtitle !== 'undefined') { RIS += "T2  - " + vm.parentCtrl.item[c].pnx.addata.jtitle[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item[c].pnx.addata.stitle !== 'undefined') { RIS += "JA  - " + vm.parentCtrl.item[c].pnx.addata.stitle[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item[c].pnx.addata.date !== 'undefined') { RIS += "PY  - " + vm.parentCtrl.item[c].pnx.addata.date[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item[c].pnx.addata.cop !== 'undefined') { RIS += "CY  - " + vm.parentCtrl.item[c].pnx.addata.cop[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item[c].pnx.addata.pub !== 'undefined') { RIS += "PB  - " + vm.parentCtrl.item[c].pnx.addata.pub[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item[c].pnx.addata.doi !== 'undefined') { RIS += "DO  - " + vm.parentCtrl.item[c].pnx.addata.doi[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item[c].pnx.display.edition !== 'undefined') { RIS += "ET  - " + vm.parentCtrl.item[c].pnx.display.edition[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item[c].pnx.addata.issue !== 'undefined') { RIS += "IS  - " + vm.parentCtrl.item[c].pnx.addata.issue[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item[c].pnx.addata.abstract !== 'undefined') { RIS += "AB  - " + vm.parentCtrl.item[c].pnx.addata.abstract[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item[c].pnx.addata.atitle !== 'undefined') { RIS += "TI  - " + vm.parentCtrl.item[c].pnx.addata.atitle[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item[c].pnx.addata.eissn !== 'undefined') { RIS += "SN  - " + vm.parentCtrl.item[c].pnx.addata.eissn[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item[c].pnx.addata.spage !== 'undefined') { RIS += "SP  - " + vm.parentCtrl.item[c].pnx.addata.spage[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item[c].pnx.addata.volume !== 'undefined') { RIS += "VL  - " + vm.parentCtrl.item[c].pnx.addata.volume[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item[c].delivery.bestlocation !== 'undefined') { RIS += "CN  - " + vm.parentCtrl.item[c].delivery.bestlocation.libraryCode.replace("CCGOULD", "CARLETON").replace("CCMRC", "CARLETON MRC").replace("SOMUSIC", "ST. OLAF MUSIC").replace("SOROLVAAG", "ST. OLAF ROLVAAG").replace("SOSCIENCE", "ST. OLAF SCIENCE") + " " + vm.parentCtrl.item[c].delivery.bestlocation.subLocation + " " + vm.parentCtrl.item[c].delivery.bestlocation.callNumber + "\r\n"; }
          if (typeof vm.parentCtrl.item[c].pnx.control.recordid !== 'undefined') { RIS += "UR  - https://carleton-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=" + vm.parentCtrl.item[c].pnx.control.recordid[0] + "&vid=01BRC_CCO&search_scope=Everything&tab=default_tab&lang=en_US\r\n"; }
          RIS += "ER  -\r\n"
        } 

        } else {
          if (typeof vm.parentCtrl.item.pnx.addata.au !== 'undefined') {var totalau = vm.parentCtrl.item.pnx.addata.au.length; }
          if (typeof vm.parentCtrl.item.pnx.addata.addau !== 'undefined') {var totaladdau = vm.parentCtrl.item.pnx.addata.addau.length; }
            RIS += "TY  - " + vm.parentCtrl.item.pnx.addata.ristype[0] + "\r\n";
          if (typeof vm.parentCtrl.item.pnx.addata.addau !== 'undefined' && typeof totaladdau !== 'undefined') { 
            for (var y = 0; y < totaladdau; y++) {
              RIS += "AU  - " + vm.parentCtrl.item.pnx.addata.addau[y] + "\r\n"; 
            }
          }

          if (typeof vm.parentCtrl.item.pnx.addata.au !== 'undefined' && typeof totalau !== 'undefined') { 
            for (var z = 0; z < totalau; z++) {
              RIS += "AU  - " + vm.parentCtrl.item.pnx.addata.au[z] + "\r\n"; 
            }
          }
          if (typeof vm.parentCtrl.item.pnx.addata.btitle !== 'undefined') { RIS += "TI  - " + vm.parentCtrl.item.pnx.addata.btitle[0] + "\r\n"; } 
          if (typeof vm.parentCtrl.item.pnx.addata.addtitle !== 'undefined') { RIS += "T2  - " + vm.parentCtrl.item.pnx.addata.addtitle[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item.pnx.addata.jtitle !== 'undefined') { RIS += "T2  - " + vm.parentCtrl.item.pnx.addata.jtitle[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item.pnx.addata.stitle !== 'undefined') { RIS += "JA  - " + vm.parentCtrl.item.pnx.addata.stitle[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item.pnx.addata.date !== 'undefined') { RIS += "PY  - " + vm.parentCtrl.item.pnx.addata.date[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item.pnx.addata.cop !== 'undefined') { RIS += "CY  - " + vm.parentCtrl.item.pnx.addata.cop[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item.pnx.addata.pub !== 'undefined') { RIS += "PB  - " + vm.parentCtrl.item.pnx.addata.pub[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item.pnx.addata.doi !== 'undefined') { RIS += "DO  - " + vm.parentCtrl.item.pnx.addata.doi[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item.pnx.display.edition !== 'undefined') { RIS += "ET  - " + vm.parentCtrl.item.pnx.display.edition[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item.pnx.addata.issue !== 'undefined') { RIS += "IS  - " + vm.parentCtrl.item.pnx.addata.issue[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item.pnx.addata.abstract !== 'undefined') { RIS += "AB  - " + vm.parentCtrl.item.pnx.addata.abstract[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item.pnx.addata.atitle !== 'undefined') { RIS += "TI  - " + vm.parentCtrl.item.pnx.addata.atitle[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item.pnx.addata.eissn !== 'undefined') { RIS += "SN  - " + vm.parentCtrl.item.pnx.addata.eissn[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item.pnx.addata.spage !== 'undefined') { RIS += "SP  - " + vm.parentCtrl.item.pnx.addata.spage[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item.pnx.addata.volume !== 'undefined') { RIS += "VL  - " + vm.parentCtrl.item.pnx.addata.volume[0] + "\r\n"; }
          if (typeof vm.parentCtrl.item.delivery.bestlocation !== 'undefined') { RIS += "CN  - " + vm.parentCtrl.item.delivery.bestlocation.libraryCode.replace("CCGOULD", "CARLETON").replace("CCMRC", "CARLETON MRC").replace("SOMUSIC", "ST. OLAF MUSIC").replace("SOROLVAAG", "ST. OLAF ROLVAAG").replace("SOSCIENCE", "ST. OLAF SCIENCE") + " " + vm.parentCtrl.item.delivery.bestlocation.subLocation + " " + vm.parentCtrl.item.delivery.bestlocation.callNumber + "\r\n"; }
          if (typeof vm.parentCtrl.item.pnx.control.recordid !== 'undefined') { RIS += "UR  - https://carleton-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=" + vm.parentCtrl.item.pnx.control.recordid[0] + "&vid=01BRC_CCO&search_scope=Everything&tab=default_tab&lang=en_US\r\n"; }
          RIS += "ER  -"
        }  
        return encodeURIComponent(RIS);
      }
    }]);

    app.component('prmActionListAfter',{
      bindings: {parentCtrl: '<'},
      controller: 'prmActionListAfterController',
      template: `<div class="action-list-addon">
            <a ng-href="data:text/plain;charset=utf-8,{{$ctrl.getRIS()}}" download="catalyst.ris">
            <div layout="column" layout-align="center center" class="layout-align-center-center layout-column">
            <prm-icon style="z-index:1; color: rgba(0, 0, 0, 0.57);" icon-type="svg" svg-icon-set="primo-actions" icon-definition="refworks"></prm-icon>
            <span class="action-list-addon-text">Export RIS<br><div style="line-height:0px;">(EndNote/Zotero)</div></span>
            </div>
            </a>
            </div>
            
            <div style="clear:both;"></div>`
    });


    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/

})();