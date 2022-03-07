class OysterCard {

constructor(){
  this.balance = 0
}

getBalance(){
  return this.balance
}

topUp(money){
  this.balance += money
}

}

module.exports = OysterCard