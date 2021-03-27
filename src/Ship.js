(function exportShip(){
    const itinerary = require('../src/Itinerary');
    const Port = require('../src/Port');
    class Ship {
        constructor(itinerary) {
            this.itinerary = itinerary;
            this.currentPort = itinerary.ports[0];
            this.previousPort = false;
            this.currentPort.addShip(this);
        }
    setSail(){
            this.previousPort = this.currentPort;
            this.currentPort.removeShip();
            this.currentPort = false;
            
    }
    dock() {
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
        this.currentPort = itinerary.ports[previousPortIndex + 1];
        this.currentPort.addShip(this);
    }
}
    if (typeof module !== 'undefined' && module.exports){
        module.exports = Ship;
        } else {
            window.Ship = Ship;
        };
}());