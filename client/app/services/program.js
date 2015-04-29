'use strict';

angular.module('mtgxApp')
  .factory("ProgramService", ['$resource',function ($resource) {
    return $resource(
      "/api/program/:id",
      {id: "@id"},
      {
        "save": {
          method:"POST",
          headers:{'Content-Type':'application/json; charset=UTF-8'}
        },
        "delete": {
          method:"DELETE"
        },
        "update": {
          method: "PUT",
          headers:{'Content-Type':'application/json; charset=UTF-8'}
        },
        "projects": {
          'method': 'GET',
          isArray: true
        }
      }
    );
  }]);
