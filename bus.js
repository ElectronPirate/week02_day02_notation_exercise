class Bus {
  constructor (routeNumber, destination){
    this.routeNumber = routeNumber;
    this.destination = destination;
    this._passengers = [];
    this._distanceTravelled = 0;
  }

  drive(){
    this._distanceTravelled += 10;
  };

  get passengers(){
    return this._passengers;
  };

  get distanceTravelled(){
    return this._distanceTravelled;
  }

  pickUpPassenger(person){
    this._passengers.push(person)
  };

  dropOffPassenger(){
    this._passengers.shift();
  };

  emptyBus(){
    for (let i = this._passengers.length-1; i >= 0; i--) {
     this.dropOffPassenger();
    };
  };

  pickUpFromStop(busStop){
    this.pickUpPassenger(busStop.leaveQueue());
  };

  pickUpAllFromStop(busStop){
    const counter = busStop._queue.length
    for (var i = 0; i < counter; i++) {
      this.pickUpFromStop(busStop);
    };
  };
}
module.exports = Bus;
