// Spies
const { assert } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const calculateNumber = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;

  beforeEach(() => {
    calculateNumberSpy = sinon.spy(calculateNumber);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should call calculateNumber with correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    assert(calculateNumber.calledOnce);
    assert(calculateNumberSpy.calledWith('SUM', 100, 20));
  });
});

