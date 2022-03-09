const OysterCard = require('./oystercard')

describe(OysterCard, () => {
  describe('getBalance', () => {
    it('should show a default balance of 0', () => {
      const card = new OysterCard
      expect(card.getBalance()).toEqual(0)
    });
  });

  describe('topUp', () => {
    it('should allow a user to top up his card', () => {
      const card = new OysterCard
      card.topUp(5)
      expect(card.getBalance()).toEqual(5)
    });
    
    it('should not allow the card to have more than £90', () => {
      const card = new OysterCard
      card.topUp(card.maxBalance)
      expect(() => card.topUp(1)).toThrow('Max balance exceeded');
    });

    it('should not let the card to top up more than the max balance', () => {
      const card = new OysterCard
      expect(() => card.topUp(card.maxBalance + 1)).toThrow('Max balance exceeded');
    });
  })
 
  describe('deduct', () => {
    it('should decut money from the card', () => {
      const card = new OysterCard
      card.topUp(5)
      card.deduct(1)
      expect(card.getBalance()).toEqual(4)
    });
  });

  describe('tapIn', () => {
    it('should raise error message if below minim fare', () => {
      const card = new OysterCard
      expect(() => card.tapIn()).toThrow('Not enough balance on Oystercard');
    });

    it('should save the current entry station', () => {
      const card = new OysterCard
      card.topUp(5)
      card.tapIn('Kings X')
      expect(card.currentJourney).toEqual(['Kings X'])
    });
  });

  describe('tapOut', () => {
    it('should charge minimum fare from the balance', () => {
      const card = new OysterCard
      card.topUp(10)
      card.tapIn()
      const initialBalance = card.balance
      card.tapOut()
      expect(card.balance).toEqual(initialBalance - card.minBalance)
    });

    it('should forget the current journey', () => {
      const card = new OysterCard
      card.topUp(5)
      card.tapIn('Kings X')
      card.tapOut()
      expect(card.currentJourney).toEqual(['Not in journey'])
    });
  });

  describe('journeyHistory', () => {
    it('should return an empty hash', () => {
      const card = new OysterCard
      expect(card.getJourneyHistory()).toEqual({})
    });
  });
});

