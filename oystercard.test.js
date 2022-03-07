const OysterCard = require('./oystercard')

describe(OysterCard, () => {
  describe('getBalance', () => {
    it('should show a default balance of 0', () => {
      let card = new OysterCard
      expect(card.getBalance()).toEqual(0)
    });
  });

});