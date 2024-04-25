export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new Error('sqft must be a number.');
    }
  }

  static evacuationWarningMessage() {
    throw new Error('Method evacuationWarningMessage() must tbe implemented');
  }
}
