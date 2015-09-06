describe('Filter: ngtrumbitta.filters.padnumber', function() {
  'use strict';
  var $filter;

  beforeEach(module('ngtrumbitta.filters.padnumber'));
  beforeEach(inject(function(_$filter_) {
    $filter = _$filter_;
  }));

  it('pads a number up to a given total "string" size', function() {
    var padding_string = '0';
    var size = 2;
    var my_number = 4;
    var expectedString = '04';

    expect($filter('ngtrumbittaPadNumber')(my_number, padding_string, size)).toEqual(expectedString);
  });
});
