class OysterCard {

constructor(){
  this.balance = 0
  this.maxBalance = 90
  this.minBalance = 1
  this.journey = false
  this.currentStation = []
}

getBalance(){
  return this.balance
}

topUp(money){
  if (this.balance < this.maxBalance){
    this.balance += money
  }
  else { throw 'Max balance exceeded'}
  }

deduct(fare){
  this.balance -= fare
}

inJourney(){
  return this.journey
}

tapIn(entryStation){
  if (this.balance > this.minBalance){
    this.journey = true
    this.currentStation.push(entryStation)
  }
  else { throw 'Not enough balance'}
}

tapOut(){
  this.deduct(this.minBalance)
  this.journey = false
}

}

module.exports = OysterCard