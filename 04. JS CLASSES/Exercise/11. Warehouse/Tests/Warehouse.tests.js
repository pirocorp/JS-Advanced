const { Warehouse } = require('../Warehouse');
const { expect } = require('chai');

describe('11. Warehouse Tests', () => {
    describe('General Tests', () => {
        it('Expect Warehouse to be function', () => {
            expect(typeof Warehouse).to.be.equal('function')
        });
        
        it('Expect new Warehouse to construct warehouse object', () => {
            const warehous = new Warehouse(50);
            expect(warehous instanceof Warehouse).to.be.equal(true, 'Object is not instance of Warehouse');
            expect(warehous.capacity).to.be.equal(50, 'Constructor doesn\'t initialize capacity correctly');
            expect(typeof warehous.availableProducts).to.be.equal('object', 'There is no initialized available products object');
            expect(typeof warehous.availableProducts['Food']).to.be.equal('object', 'There is no initialized Food object');
            expect(Object.keys(warehous.availableProducts['Food']).length).to.be.equal(0, 'Incorectly initialized Food object');
            expect(typeof warehous.availableProducts['Drink']).to.be.equal('object', 'There is no initialized Drink object');
            expect(Object.keys(warehous.availableProducts['Drink']).length).to.be.equal(0, 'Incorectly initialized Drink object');
        });

        it('Expect new Warehouse("20") to throw', () => {
            expect(function () { new Warehouse('20'); }).to.throw(`Invalid given warehouse space`);
        });

        it('Expect new Warehouse(-20) to throw', () => {
            expect(function () { new Warehouse(-20); }).to.throw(`Invalid given warehouse space`);
        });

        it('Expect new Warehouse(0) to throw', () => {
            expect(function () { new Warehouse(0); }).to.throw(`Invalid given warehouse space`);
        });
    });

    describe('Getters and Setters Tests', () => {
        let warehouse;

        beforeEach("Create warehouse object with capacity of 50", () => {
            warehouse = new Warehouse(50);
        });

        it('Expect warehouse.capacity getter to return capacity of 50', () => {
            expect(warehouse.capacity).to.be.equal(50, 'Incorrect capacity');
        });

        it('Expect warehouse.capacity = 20 to set capacity to 20', () => {
            expect(warehouse.capacity = 20).to.be.equal(20, 'Incorrect capacity');
        });

        it('Expect warehouse.capacity = 20 to set capacity to 20', () => {
            expect(warehouse.capacity = 20).to.be.equal(20, 'Incorrect capacity');
        });

        it('Expect warehouse.capacity = -20 to throw', () => {
            expect(function() { warehouse.capacity = -20; }).to.throw(`Invalid given warehouse space`);
        });

        it('Expect warehouse.capacity = 0 to throw', () => {
            expect(function () { warehouse.capacity = 0; }).to.throw(`Invalid given warehouse space`);
        });

        it('Expect warehouse.capacity = "20" to throw', () => {
            expect(function () { warehouse.capacity = '20'; }).to.throw(`Invalid given warehouse space`);
        });
    });

    describe('addProduct Tests', () => {
        let warehouse;

        beforeEach("Create warehouse object with capacity of 50", () => {
            warehouse = new Warehouse(50);
        });

        it('Expect warehouse.addProduct("Food", "Ice Cream", 5) to add Ice Cream', () => {
            warehouse.addProduct("Food", "Ice Cream", 5);
            expect(JSON.stringify(warehouse.availableProducts)).to.be.equal('{"Food":{"Ice Cream":5},"Drink":{}}');
        });

        it('Expect warehouse.addProduct() to compound', () => {
            warehouse.addProduct("Food", "Ice Cream", 5);
            warehouse.addProduct("Food", "Ice Cream", 5);
            warehouse.addProduct("Food", "Ice Cream", 5);
            expect(JSON.stringify(warehouse.availableProducts)).to.be.equal('{"Food":{"Ice Cream":15},"Drink":{}}');
        });

        it('Expect warehouse.addProduct() to throw after overflow ', () => {
            warehouse.addProduct("Food", "Ice Cream", 5);            
            expect((function () { warehouse.addProduct("Food", "Ice Cream", 50) })).to.throw(`There is not enough space or the warehouse is already full`);
        });        
    });

    describe('orderProducts Tests', () => {
        it('Expect Food products to be ordered', () => {
            const warehouse = new Warehouse(50);
            warehouse.addProduct("Food", "Ice Cream", 5);
            warehouse.addProduct("Food", "Meat", 15);
            warehouse.addProduct("Food", "Apples", 6);
            expect(JSON.stringify(warehouse.orderProducts("Food"))).to.be.equal('{"Meat":15,"Apples":6,"Ice Cream":5}');
        });

        it('Expect Drink products to be ordered', () => {
            const warehouse = new Warehouse(50);
            warehouse.addProduct("Drink", "Rakia", 6);
            warehouse.addProduct("Drink", "Absent", 15);
            warehouse.addProduct("Drink", "Vodka", 5);
            expect(JSON.stringify(warehouse.orderProducts("Drink"))).to.be.equal('{"Absent":15,"Rakia":6,"Vodka":5}');
        });
    });

    describe('occupiedCapacity Tests', () => {
        it('Expect occupiedCapacity with only Drink type to be equal to 26', () => {
            const warehouse = new Warehouse(50);
            warehouse.addProduct("Drink", "Rakia", 6);
            warehouse.addProduct("Drink", "Absent", 15);
            warehouse.addProduct("Drink", "Vodka", 5);
            expect(warehouse.occupiedCapacity()).to.be.equal(26);
        });

        it('Expect occupiedCapacity with only Food type to be equal to 36', () => {
            const warehouse = new Warehouse(50);
            warehouse.addProduct("Food", "Ice Cream", 5);
            warehouse.addProduct("Food", "Meat", 25);
            warehouse.addProduct("Food", "Apples", 6);
            expect(warehouse.occupiedCapacity()).to.be.equal(36);
        });

        it('Expect occupiedCapacity with both types to be equal to 21', () => {
            const warehouse = new Warehouse(50);
            warehouse.addProduct("Food", "Ice Cream", 1);
            warehouse.addProduct("Food", "Meat", 2);
            warehouse.addProduct("Food", "Apples", 3);

            warehouse.addProduct("Drink", "Rakia", 4);
            warehouse.addProduct("Drink", "Absent", 5);
            warehouse.addProduct("Drink", "Vodka", 6);
            expect(warehouse.occupiedCapacity()).to.be.equal(21);
        });

        it('Expect occupiedCapacity in empty warehouse to be equal to 0', () => {
            const warehouse = new Warehouse(50);
            expect(warehouse.occupiedCapacity()).to.be.equal(0);
        });

        it('Expect occupiedCapacity in full warehouse to be equal to initial', () => {
            const warehouse = new Warehouse(50);
            warehouse.addProduct("Drink", "Vodka", 50);
            expect(warehouse.occupiedCapacity()).to.be.equal(50);
        });
    });

    describe('revision Tests', () => {
        it('Expect revision in empty warehouse to return The Warehouse is empty', () => {
            const warehouse = new Warehouse(50);
            expect(warehouse.revision()).to.be.equal('The warehouse is empty');
        });

        it('Expect revision to return all products of each type (1)', () => {
            const warehouse = new Warehouse(50);
            warehouse.addProduct("Drink", "Rakia", 6);
            warehouse.addProduct("Drink", "Absent", 15);
            warehouse.addProduct("Drink", "Vodka", 5);
            expect(warehouse.revision()).to.be.equal('Product type - [Food]\nProduct type - [Drink]\n- Rakia 6\n- Absent 15\n- Vodka 5');
        });

        it('Expect revision to return all products of each type (2)', () => {
            const warehouse = new Warehouse(50);
            warehouse.addProduct("Food", "Ice Cream", 5);
            warehouse.addProduct("Food", "Meat", 25);
            warehouse.addProduct("Food", "Apples", 6);
            expect(warehouse.revision()).to.be.equal('Product type - [Food]\n- Ice Cream 5\n- Meat 25\n- Apples 6\nProduct type - [Drink]');
        });

        it('Expect revision to return all products of each type (3)', () => {
            const warehouse = new Warehouse(50);
            warehouse.addProduct("Food", "Ice Cream", 1);
            warehouse.addProduct("Food", "Meat", 2);
            warehouse.addProduct("Food", "Apples", 3);

            warehouse.addProduct("Drink", "Rakia", 4);
            warehouse.addProduct("Drink", "Absent", 5);
            warehouse.addProduct("Drink", "Vodka", 6);
            expect(warehouse.revision()).to.be.equal('Product type - [Food]\n- Ice Cream 1\n- Meat 2\n- Apples 3\nProduct type - [Drink]\n- Rakia 4\n- Absent 5\n- Vodka 6');
        });
    });

    describe('scrapeAProduct Tests', () => {
        let warehous;
        beforeEach("Intitialize warehouse with some products inside", () => {
            warehouse = new Warehouse(50);

            warehouse.addProduct("Food", "Ice Cream", 1);
            warehouse.addProduct("Food", "Meat", 2);
            warehouse.addProduct("Food", "Apples", 3);

            warehouse.addProduct("Drink", "Rakia", 4);
            warehouse.addProduct("Drink", "Absent", 5);
            warehouse.addProduct("Drink", "Vodka", 6);
        });

        it('Expect scrapeAProduct to throw if product is not found', () => {            
            expect(function () { warehouse.scrapeAProduct("Vine", 5) }).to.throw('Vine do not exists');
        });

        it('Expect scrapeAProduct to zero product if quantity is more then in warehouse (1)', () => {
            expect(JSON.stringify(warehouse.scrapeAProduct("Vodka", 15))).to.be.equal('{"Rakia":4,"Absent":5,"Vodka":0}');
        });

        it('Expect scrapeAProduct to zero product if quantity is equal to the warehouse (1)', () => {
            expect(JSON.stringify(warehouse.scrapeAProduct("Vodka", 6))).to.be.equal('{"Rakia":4,"Absent":5,"Vodka":0}');
        });

        it('Expect scrapeAProduct to reduce quantaty in warehouse (1)', () => {
            expect(JSON.stringify(warehouse.scrapeAProduct("Vodka", 3))).to.be.equal('{"Rakia":4,"Absent":5,"Vodka":3}');
        });

        it('Expect scrapeAProduct to zero product if quantity is more then in warehouse (2)', () => {
            expect(JSON.stringify(warehouse.scrapeAProduct("Meat", 15))).to.be.equal('{"Ice Cream":1,"Meat":0,"Apples":3}');
        });

        it('Expect scrapeAProduct to zero product if quantity is equal to the warehouse (2)', () => {
            expect(JSON.stringify(warehouse.scrapeAProduct("Meat", 6))).to.be.equal('{"Ice Cream":1,"Meat":0,"Apples":3}');
        });

        it('Expect scrapeAProduct to reduce quantaty in warehouse (2)', () => {
            expect(JSON.stringify(warehouse.scrapeAProduct("Meat", 1))).to.be.equal('{"Ice Cream":1,"Meat":1,"Apples":3}');
        });
    });
});