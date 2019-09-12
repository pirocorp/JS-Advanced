function createComputerHierarchy() {
    class Device {
        constructor(manufacturer) {
            if (new.target === Device) {
                throw new Error('Canot instantiate directly.');
            }

            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Device {
        constructor(manufacturer, responseTime) {
            super(manufacturer);

            this.responseTime = responseTime;
        }
    }

    class Monitor extends Device {
        constructor(manufacturer, width, height) {
            super(manufacturer);

            this.width = width;
            this.height = height;
        }
    } 

    class Battery extends Device {
        constructor(manufacturer, expectedLife ) {
            super(manufacturer);

            this.expectedLife = expectedLife;
        }
    }

    class Computer extends Device {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            super(manufacturer);

            if (new.target === Computer) {
                throw new Error('Canot instantiate directly.');
            }

            this.processorSpeed = processorSpeed ;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);

            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (value instanceof Battery) {
                this._battery = value;
            } else {
                throw new TypeError('Value is not instance of Battery');
            }
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);

            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (value instanceof Keyboard) {
                this._keyboard = value;
            } else {
                throw new TypeError('Value is not instance of Keyboard');
            }
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (value instanceof Monitor) {
                this._monitor = value;
            } else {
                throw new TypeError('Value is not instance of Monitor');
            }
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
