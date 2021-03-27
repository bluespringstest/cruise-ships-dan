/* globals describe it expect */
const Ship  = require('../src/Ship');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {
    describe('with ports and an itinerary', () => {
        let dover;
        let calais;
        let itinerary;
        let ship;
        beforeEach(() => {
            dover = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Dover',
                ships: []
            };
            calais = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Calais',
                ships: []
            };
            itinerary = {
                ports: [dover, calais]
            };
            ship = new Ship(itinerary);
        })
        it('can create a ship', () => {
            expect(ship).toBeInstanceOf(Object);
        });
        it('has a starting port', () => {
            expect(ship.currentPort).toBe(dover);
        });
        it('can set sail', () => {
            ship.setSail();
            expect(ship.currentPort).toBeFalsy();
            expect(dover.removeShip).toHaveBeenCalled();
        });
        it('can dock at a different port', () => {
            ship.setSail();
            ship.dock(calais);
            expect(calais.addShip).toHaveBeenCalled();
        })
        it('the ship gets added to port on instantiation', () => {
            expect(dover.addShip).toHaveBeenCalledWith(ship);
        })
    });
});