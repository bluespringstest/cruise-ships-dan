const Itinerary = require('../src/Itinerary');
const Port = require('../src/Itinerary');

describe('Itinerary', () => {
    describe('ships docked to a port and itinerary', () => {
        let port;
        let itinerary;
        beforeEach(() => {
            port = {};
            itinerary = new Itinerary(port);
        });
    it('can create a new Itinerary', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
//when writing tests, only include data that is relevant to the test
    it('can have ports as an object', () => {
        expect(itinerary.ports).toEqual(port);
    });
});
});