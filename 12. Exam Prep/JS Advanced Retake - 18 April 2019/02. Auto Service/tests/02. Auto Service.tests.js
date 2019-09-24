const { AutoService } = require('../02. Auto Service');
const { expect } = require('chai');

describe('02. Auto Service Tests', () => {
    describe('General Tests', () => {
        it('Expect AutoService to be function', () => {
            expect(typeof AutoService).to.be.equal('function');
        });

        it('Expect new AutoService() to return object', () => {
            expect(typeof new AutoService()).to.be.equal('object');
        });

        it('Expect constructor to work properly', () => {
            const object = new AutoService(500);

            expect(object.garageCapacity).to.be.equal(500, 'Incorrect garage capacity');
            expect(Array.isArray(object.workInProgress)).to.be.equal(true, 'workInProgress is not Array');
            expect(object.workInProgress.length).to.be.equal(0, 'Incorrect length of workInProgress property');
            expect(Array.isArray(object.backlogWork)).to.be.equal(true, 'backlogWork is not Array');
            expect(object.backlogWork.length).to.be.equal(0, 'Incorrect length of backlogWork property');
        });
    });

    describe('Accessor availableSpace Tests', () => {
        let object;
        beforeEach(() => {
            object = new AutoService(5);
        });

        it('Expect available space to be equal to 5', () => {
            expect(object.availableSpace).to.be.equal(5, 'Incorrect available space');
        });

        it('Expect available space to be equal to 3', () => {
            object.signUpForReview('x', 'y', {});
            object.signUpForReview('a', 'b', {});

            expect(object.availableSpace).to.be.equal(3, 'Incorrect available space');
        });

        it('Expect available space to be equal to 0', () => {
            object.signUpForReview('x', 'y', {});
            object.signUpForReview('a', 'b', {});            
            object.signUpForReview('x', 'y', {});
            object.signUpForReview('a', 'b', {});
            object.signUpForReview('a', 'b', {});

            expect(object.availableSpace).to.be.equal(0, 'Incorrect available space');
        });

        it('Expect available space to be equal to 0', () => {
            object.signUpForReview('x', 'y', {});
            object.signUpForReview('a', 'b', {});            
            object.signUpForReview('x', 'y', {});
            object.signUpForReview('a', 'b', {});
            object.signUpForReview('x', 'y', {});
            object.signUpForReview('a', 'b', {});

            expect(object.availableSpace).to.be.equal(0, 'Incorrect available space');
        });
    });

    describe('Function signUpForReview Tests', () => {
        let object;
        beforeEach(() => {
            object = new AutoService(5);
        });

        it('Expect signUpForReview to add new client', () => {
            object.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });

            expect(JSON.stringify(object.backlogWork)).to.be.equal('[]', 'Incorrect backlogWork property');
            expect(JSON.stringify(object.workInProgress)).to.be.equal('[{"plateNumber":"CA1234CA","clientName":"Peter","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","doors":"broken"}}]', 'Incorrect workInProgress property');
        });

        it('Expect signUpForReview to add multiple new clients', () => {
            object.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
            object.signUpForReview('Simeon', 'H1178AH', { 'engine': 'B6FDI', 'transmission': 'ASD5554' });
            object.signUpForReview('Peter', 'CA7894CA', { 'engine': 'SDF55', 'transmission': 'X4FDB5', 'mirror': 'broken' });

            expect(JSON.stringify(object.backlogWork)).to.be.equal('[]', 'Incorrect backlogWork property');
            expect(JSON.stringify(object.workInProgress)).to.be.equal('[{"plateNumber":"CA1234CA","clientName":"Peter","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","doors":"broken"}},{"plateNumber":"H1178AH","clientName":"Simeon","carInfo":{"engine":"B6FDI","transmission":"ASD5554"}},{"plateNumber":"CA7894CA","clientName":"Peter","carInfo":{"engine":"SDF55","transmission":"X4FDB5","mirror":"broken"}}]', 'Incorrect workInProgress property');
        });

        it('Expect signUpForReview to add multiple new clients and workInProgress to be full', () => {
            object.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
            object.signUpForReview('Simeon', 'H1178AH', { 'engine': 'B6FDI', 'transmission': 'ASD5554' });
            object.signUpForReview('Peter', 'CA7894CA', { 'engine': 'SDF55', 'transmission': 'X4FDB5', 'mirror': 'broken' });
            object.signUpForReview('Gosho', 'CA9999CA', { 'engine': 'ADSS', 'windows': 'broken' });
            object.signUpForReview('Stefan', 'H3333AH', { 'engine': 'KDIF6', 'transmission': 'broken' });

            expect(JSON.stringify(object.backlogWork)).to.be.equal('[]', 'Incorrect backlogWork property');
            expect(JSON.stringify(object.workInProgress)).to.be.equal('[{"plateNumber":"CA1234CA","clientName":"Peter","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","doors":"broken"}},{"plateNumber":"H1178AH","clientName":"Simeon","carInfo":{"engine":"B6FDI","transmission":"ASD5554"}},{"plateNumber":"CA7894CA","clientName":"Peter","carInfo":{"engine":"SDF55","transmission":"X4FDB5","mirror":"broken"}},{"plateNumber":"CA9999CA","clientName":"Gosho","carInfo":{"engine":"ADSS","windows":"broken"}},{"plateNumber":"H3333AH","clientName":"Stefan","carInfo":{"engine":"KDIF6","transmission":"broken"}}]', 'Incorrect workInProgress property');
        });

        it('Expect signUpForReview to add multiple new clients and after workInProgress is full to push them into backlogWork', () => {
            object.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
            object.signUpForReview('Simeon', 'H1178AH', { 'engine': 'B6FDI', 'transmission': 'ASD5554' });
            object.signUpForReview('Peter', 'CA7894CA', { 'engine': 'SDF55', 'transmission': 'X4FDB5', 'mirror': 'broken' });
            object.signUpForReview('Gosho', 'CA9999CA', { 'engine': 'ADSS', 'windows': 'broken' });
            object.signUpForReview('Stefan', 'H3333AH', { 'engine': 'KDIF6', 'transmission': 'broken' });

            object.signUpForReview('John', 'CA6666CA', { 'engine': 'SDF55', 'engine': 'broken' });

            expect(JSON.stringify(object.backlogWork)).to.be.equal('[{"plateNumber":"CA6666CA","clientName":"John","carInfo":{"engine":"broken"}}]', 'Incorrect backlogWork property');
            expect(JSON.stringify(object.workInProgress)).to.be.equal('[{"plateNumber":"CA1234CA","clientName":"Peter","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","doors":"broken"}},{"plateNumber":"H1178AH","clientName":"Simeon","carInfo":{"engine":"B6FDI","transmission":"ASD5554"}},{"plateNumber":"CA7894CA","clientName":"Peter","carInfo":{"engine":"SDF55","transmission":"X4FDB5","mirror":"broken"}},{"plateNumber":"CA9999CA","clientName":"Gosho","carInfo":{"engine":"ADSS","windows":"broken"}},{"plateNumber":"H3333AH","clientName":"Stefan","carInfo":{"engine":"KDIF6","transmission":"broken"}}]', 'Incorrect workInProgress property');
        });

        it('Expect signUpForReview to add multiple new clients and after workInProgress is full to push them into backlogWork(2)', () => {
            object.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
            object.signUpForReview('Simeon', 'H1178AH', { 'engine': 'B6FDI', 'transmission': 'ASD5554' });
            object.signUpForReview('Peter', 'CA7894CA', { 'engine': 'SDF55', 'transmission': 'X4FDB5', 'mirror': 'broken' });
            object.signUpForReview('Gosho', 'CA9999CA', { 'engine': 'ADSS', 'windows': 'broken' });
            object.signUpForReview('Stefan', 'H3333AH', { 'engine': 'KDIF6', 'transmission': 'broken' });

            object.signUpForReview('John', 'CA6666CA', { 'engine': 'SDF55', 'engine': 'broken' });
            object.signUpForReview('Viki', 'HERS', { 'engine': 'V8', 'front window': 'broken' });

            expect(JSON.stringify(object.backlogWork)).to.be.equal('[{"plateNumber":"CA6666CA","clientName":"John","carInfo":{"engine":"broken"}},{"plateNumber":"HERS","clientName":"Viki","carInfo":{"engine":"V8","front window":"broken"}}]', 'Incorrect backlogWork property');
            expect(JSON.stringify(object.workInProgress)).to.be.equal('[{"plateNumber":"CA1234CA","clientName":"Peter","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","doors":"broken"}},{"plateNumber":"H1178AH","clientName":"Simeon","carInfo":{"engine":"B6FDI","transmission":"ASD5554"}},{"plateNumber":"CA7894CA","clientName":"Peter","carInfo":{"engine":"SDF55","transmission":"X4FDB5","mirror":"broken"}},{"plateNumber":"CA9999CA","clientName":"Gosho","carInfo":{"engine":"ADSS","windows":"broken"}},{"plateNumber":"H3333AH","clientName":"Stefan","carInfo":{"engine":"KDIF6","transmission":"broken"}}]', 'Incorrect workInProgress property');
        });
    });

    describe('Function carInfo Tests', () => {
        let object;
        beforeEach(() => {
            object = new AutoService(5);
            object.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
            object.signUpForReview('Simeon', 'H1178AH', { 'engine': 'B6FDI', 'transmission': 'ASD5554' });
            object.signUpForReview('Peter', 'CA7894CA', { 'engine': 'SDF55', 'transmission': 'X4FDB5', 'mirror': 'broken' });
            object.signUpForReview('Gosho', 'CA9999CA', { 'engine': 'ADSS', 'windows': 'broken' });
            object.signUpForReview('Stefan', 'H3333AH', { 'engine': 'KDIF6', 'transmission': 'broken' });

            object.signUpForReview('John', 'CA6666CA', { 'engine': 'SDF55', 'engine': 'broken' });
            object.signUpForReview('Viki', 'HERS', { 'engine': 'V8', 'front window': 'broken' });
        });

        it('Expect to find client in backlogWork', () => {
            const result = JSON.stringify(object.carInfo('HERS', 'Viki'));

            expect(result).to.be.equal('{"plateNumber":"HERS","clientName":"Viki","carInfo":{"engine":"V8","front window":"broken"}}', 'Incorrect car info');
        });

        it('Expect to find client in workInProgress', () => {
            const result = JSON.stringify(object.carInfo('CA1234CA', 'Peter'));

            expect(result).to.be.equal('{"plateNumber":"CA1234CA","clientName":"Peter","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","doors":"broken"}}', 'Incorrect car info');
        });

        it('Expect not to find client', () => {
            const result = JSON.stringify(object.carInfo('XXX', 'Asen'));
            
            expect(result).to.be.equal('"There is no car with platenumber XXX and owner Asen."', 'Incorrect error message');
        });
    });

    describe('Function repairCar Tests', () => {
        let object;
        beforeEach(() => {
            object = new AutoService(5);
            object.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
            object.signUpForReview('Simeon', 'H1178AH', { 'engine': 'B6FDI', 'transmission': 'ASD5554' });
            object.signUpForReview('Asencho', 'CA7894CA', { 'engine': 'broken', 'transmission': 'X4FDB5', 'mirror': 'broken' });
            object.signUpForReview('Gosho', 'CA9999CA', { 'engine': 'ADSS', 'windows': 'broken' });
            object.signUpForReview('Stefan', 'H3333AH', { 'engine': 'KDIF6', 'transmission': 'broken' });

            object.signUpForReview('John', 'CA6666CA', { 'engine': 'SDF55', 'transmission': 'broken' });
            object.signUpForReview('Alexis', 'SASSA', { 'engine': 'broken', 'transmission': 'broken' });
            object.signUpForReview('Viki', 'HERS', { 'engine': 'V8' });
        });

        it('Expect repairCar to get first car from workInProgress', () => {
            const result = object.repairCar();

            expect(result).to.be.equal('Your doors were repaired.');
        });

        it('Expect repairCar to get first two cars from workInProgress', () => {
            object.repairCar();
            const result = object.repairCar();

            expect(result).to.be.equal('Your car was fine, nothing was repaired.');
        });

        it('Expect repairCar to get first three cars from workInProgress', () => {
            object.repairCar();
            object.repairCar();
            const result = object.repairCar();

            expect(result).to.be.equal('Your engine and mirror were repaired.');
        });

        it('Expect repairCar to get first four cars from workInProgress', () => {
            object.repairCar();
            object.repairCar();
            object.repairCar();
            const result = object.repairCar();
            
            expect(result).to.be.equal('Your windows were repaired.');
        });

        it('Expect repairCar to get all cars from workInProgress', () => {
            object.repairCar();
            object.repairCar();
            object.repairCar();
            object.repairCar();
            const result = object.repairCar();
            
            expect(result).to.be.equal('Your transmission were repaired.');
        });

        it('Expect repairCar to get first car from backlogWork', () => {
            object.repairCar();
            object.repairCar();
            object.repairCar();
            object.repairCar();
            object.repairCar();

            const result = object.repairCar();
            
            expect(result).to.be.equal('Your transmission were repaired.');
        });

        it('Expect repairCar to get first two cars from backlogWork', () => {
            object.repairCar();
            object.repairCar();
            object.repairCar();
            object.repairCar();
            object.repairCar();

            object.repairCar();            
            const result = object.repairCar();
            
            expect(result).to.be.equal('Your engine and transmission were repaired.');
        });

        it('Expect repairCar to get all cars from backlogWork', () => {
            object.repairCar();
            object.repairCar();
            object.repairCar();
            object.repairCar();
            object.repairCar();

            object.repairCar();            
            object.repairCar();            
            const result = object.repairCar();
            
            expect(result).to.be.equal('Your car was fine, nothing was repaired.');
        });

        it('Expect repairCar error message no more cars', () => {
            object.repairCar();
            object.repairCar();
            object.repairCar();
            object.repairCar();
            object.repairCar();

            object.repairCar();            
            object.repairCar();            
            object.repairCar();            
            const result = object.repairCar();
            
            expect(result).to.be.equal('No clients, we are just chilling...');
        });
    });

    describe('Mixin signUpForReview and repairCar Tests', () => {
        it('Test mix operations for repairCar and signUpForReview', () => {
            const object = new AutoService(3);
            object.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
            object.signUpForReview('Simeon', 'H1178AH', { 'engine': 'B6FDI', 'transmission': 'ASD5554' });
            object.repairCar();
            object.signUpForReview('Simeon', 'H1178AH', { 'engine': 'B6FDI', 'transmission': 'ASD5554' });
            object.signUpForReview('Asencho', 'CA7894CA', { 'engine': 'broken', 'transmission': 'X4FDB5', 'mirror': 'broken' });
            object.repairCar();
            object.signUpForReview('Asencho', 'CA7894CA', { 'engine': 'broken', 'transmission': 'X4FDB5', 'mirror': 'broken' });
            object.signUpForReview('Gosho', 'CA9999CA', { 'engine': 'ADSS', 'windows': 'broken' });
            object.signUpForReview('Stefan', 'H3333AH', { 'engine': 'KDIF6', 'transmission': 'broken' });
            object.repairCar();
            object.repairCar();
            object.repairCar();
            object.signUpForReview('Asencho', 'CA7894CA', { 'engine': 'broken', 'transmission': 'X4FDB5', 'mirror': 'broken' });
            object.signUpForReview('Gosho', 'CA9999CA', { 'engine': 'ADSS', 'windows': 'broken' });
            object.signUpForReview('Stefan', 'H3333AH', { 'engine': 'KDIF6', 'transmission': 'broken' });
            object.repairCar();
            object.signUpForReview('John', 'CA6666CA', { 'engine': 'SDF55', 'transmission': 'broken' });
            object.signUpForReview('Alexis', 'SASSA', { 'engine': 'broken', 'transmission': 'broken' });
            object.signUpForReview('Viki', 'HERS', { 'engine': 'V8' });
            object.repairCar();
            object.repairCar();
            const result = object.repairCar(); 
            expect(result).to.be.equal('Your transmission were repaired.');      
        })
    });
});