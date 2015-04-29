'use strict';

angular.module('mtgxApp')
  .controller('ProgramCtrl', ['$scope', 'ProgramService',
    function ($scope, ProgramService) {

      var self = this;
      self.allPrograms = [];


      // Get all programs
      ProgramService.query().$promise.then(
        function (success) {
          self.allPrograms = success;
        }, function (error) {
          console.log('Error: ' + error);
        }
      );


      // Instance of the program object
      $scope.newProgram = {
        'date': new Date(),
        'start_time': '',
        'lead_text': '',
        'name': '',
        'b_line': '',
        'synopsis': '',
        'url': ''
      };

      // Creating the program from form
      self.createProgram = function () {

        ProgramService.save($scope.newProgram).$promise.then(
          function (success) {
            console.log(success);

            // Get all programs, do a function call instead
            ProgramService.query().$promise.then(
              function (success) {
                self.allPrograms = success;
              }, function (error) {
                console.log('Error: ' + error);
              }
            );

            // Clear data
            $scope.newProgram = {
              'date': new Date(),
              'start_time': '',
              'lead_text': '',
              'name': '',
              'b_line': '',
              'synopsis': '',
              'url': ''
            };

          }, function (error) {
            console.log(error);
          }
        );
      };



      // Logic for datepicker
      $scope.today = function() {
        $scope.dt = new Date();
      };

      $scope.today();


      $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
      };

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[0];



      // Save the xml file with Filesaver API
      $scope.saveToXML = function(file){
        var XML = document.createElement("div");
        var Node = document.createElement("program");

        Node.appendChild( document.createElement("date")).textContent = file.date;
        Node.appendChild( document.createElement("start_time") ).textContent = file.start_time;
        Node.appendChild( document.createElement("lead_text") ).textContent = file.lead_text;
        Node.appendChild( document.createElement("name") ).textContent = file.name;
        Node.appendChild( document.createElement("b_line") ).textContent = file.b_line;
        Node.appendChild( document.createElement("synopsis") ).textContent = file.synopsis;
        Node.appendChild( document.createElement("url") ).textContent = file.url;
        XML.appendChild(Node);

        var blob = new Blob([XML.innerHTML], {type: "text/xml"});
        saveAs(blob, "program.xml");
      };


      // Remove specific program
      $scope.removeRow = function(id){
        ProgramService.delete({}, {'id': id });


        // Get all programs
        ProgramService.query().$promise.then(
          function (success) {
            self.allPrograms = success;
          }, function (error) {
            console.log('Error: ' + error);
          }
        );
      };




    }]);
