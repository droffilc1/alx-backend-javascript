// Spies
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;

  beforeEach(() => {
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  it('should call calculateNumber with correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(calculateNumberSpy);
    sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 20);
  });

  afterEach(() => {
    sinon.restore();
  });
});

