angular.module('ngtrumbitta.filters.padnumber', [])
  .filter('ngtrumbittaPadNumber', function() {
    'use strict';
    var repeat = function(s, n) {
      var a = [];
      while (a.length < n) {
        a.push(s);
      }
      return a.join('');
    };
    return function(input, padding_string, size) {
      if (input === undefined) {
        input = '';
      }
      if (input.length >= size) {
        return input;
      }
      var pad = repeat(padding_string, size);
      return (pad + input).slice(-1 * size);
    };
  });
