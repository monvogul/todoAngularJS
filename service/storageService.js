angular.module('todoApp').service('storageService', function () {
    "use strict";
    this.storedNotes = [];

    this.getNotes = function () {
        if (localStorage && localStorage.getItem("notes")) {
            this.storedNotes = JSON.parse(localStorage.getItem("notes"));
        }
        return this.storedNotes;
    }

    this.setNotes = function (notes) {
        localStorage && localStorage.setItem("notes", JSON.stringify(angular.copy(this.storedNotes)));
    }

});