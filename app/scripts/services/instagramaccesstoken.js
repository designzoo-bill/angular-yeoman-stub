'use strict';

/**
 * @ngdoc service
 * @name testApp.InstagramAccessToken
 * @description
 * # InstagramAccessToken
 * Service in the testApp.
 */
angular.module('testApp')
  .service('InstagramAccessToken', function InstagramAccessToken() {

    var STORAGE_ID = 'instagram_access_token';

    return {
        get: function () {
            return localStorage.getItem(STORAGE_ID);
        },
        set: function (token) {
            localStorage.setItem(STORAGE_ID, token);
        }
    };
  });
