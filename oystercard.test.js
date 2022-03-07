const OysterCard = require('./oystercard')

describe(OysterCard, () => {
  describe('getBalance', () => {
    it('should show a default balance of 0', () => {
      let card = new OysterCard
      expect(card.getBalance()).toEqual(0)
    });
  });

  describe('topUp', () => {
    it('should allow a user to top up his card', () => {
      let card = new OysterCard
      card.topUp(5)
      expect(card.getBalance()).toEqual(5)
    });
    
    it('should not allow the card to have more than £90', () => {
      let card = new OysterCard
      card.topUp(this.maxBalance)
      expect(() => card.topUp(1)).toThrow('Max balance exceeded');
    });
  })

});