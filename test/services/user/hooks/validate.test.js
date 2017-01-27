'use strict';

const assert = require('assert');
const validate = require('../../../../src/services/user/hooks/validate.js');

describe('user validate hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    validate()(mockHook);

    assert.ok(mockHook.validate);
  });
});
