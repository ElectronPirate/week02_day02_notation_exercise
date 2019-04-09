class BusStop {
  constructor (name){
    this.name = name;
    this._queue = [];
  }

  get queue(){
    return this._queue;
  }

  joinQueue(person){
    this._queue.push(person);
  };

  leaveQueue(){
    this._queue.shift();
  };
}
module.exports = BusStop;
