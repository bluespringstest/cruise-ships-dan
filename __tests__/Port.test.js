const Port = require('../src/Port');
const Ship  = require('../src/Ship');
const Itinerary = require('../src/Itinerary');

describe('Port', () => {
    describe('with ships that have itineries', () => {
        let calais;
        let dover;
        let ship;
        let titanic;
        let princeSolomon;
        beforeEach(() => {
            dover = new Port('Dover');
            calais = new Port('Calais');
            princeSolomon = new Port('Southampton');
            itinerary = new Itinerary([dover]);
            itinerary2 = new Itinerary([calais]);
            ship = jest.fn();
            titanic = new Ship(itinerary2)
        });
        it('can create a port', () => {
            expect(new Port()).toBeInstanceOf(Object);
        });
        it('Ports have a name', () => {
            expect(dover.name).toBe('Dover');
        });
        it('Adds a ship to port', () => {
            dover.addShip(titanic);
            expect(dover.ships).toContain(titanic);
        });
        it('Removes a ship from port', () => {
            princeSolomon.addShip(ship);
            princeSolomon.addShip(titanic);
            princeSolomon.removeShip(titanic)
            expect(princeSolomon.ships).toEqual([ship]);
        });
    });
});