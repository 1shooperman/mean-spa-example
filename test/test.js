'use strict';

var assert = require('assert');
//var Nerd = require('../app/models/nerd');


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

// it('should complete this test', function (done) {
//   return new Promise(function (resolve) {
//     assert.ok(true);
//     resolve();
//   })
//     .then(done);
// });

// describe('Nerd', function() {
//   describe('#save()', function() {
//     it('should save without error', function(done) {
//       var user = new Nerd({name: 'Luna'});
//       user.save(done);
//     });
//   });
// });


//http://mochajs.org/
