var todoApp = angular.module('todoApp', ['ngAnimate']);

angular.module('todoApp').controller('TodoCtrl', ['$scope', 'storageService', function ($scope, storageService) {
    "use strict";
    var ENTER_KEY = 13;

    $scope.items = [];

    this.newNote = '';
    this.editItem = [];
    this.query = '';

    //Get notes from store initially
    $scope.items = storageService.getNotes();

    //Every change will be persisted to local storage
    $scope.$watch('items', function (oldVal, newVal) {
        if (oldVal !== newVal) {
            storageService.setNotes($scope.items);
        }
    }, true);

    //Add a new note
    this.addNewNote = function (evnt) {
        if (this.newNote && evnt.charCode === ENTER_KEY) {

            var item = {
                text: this.newNote,
                completed: false,
                id: +new Date()
            };

            $scope.items.push(item);
            this.newNote = "";
        }
    };

    //Remove a note
    this.removeNote = function (indx) {
      $scope.items.splice(indx, 1);
    }

    //Finish editing on hit of enter key and update the note
    this.finishEditing = function (evnt, indx) {
        if (evnt.charCode === ENTER_KEY) {
            this.editItem[indx] = false;
        }
    }
}]);





