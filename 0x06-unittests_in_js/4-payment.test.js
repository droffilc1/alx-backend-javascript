// Stubs
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });


  it('should verify that calculateNumber was called once with the correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(calculateNumberStub);
    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
  });

  it('should verify that console.log was called with the correct message', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 10');
  });

  afterEach(() => {
    sinon.restore();
  });
});
