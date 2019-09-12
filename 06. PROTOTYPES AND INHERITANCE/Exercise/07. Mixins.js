function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };

        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > this.ram / 4;
        };

        classToExtend.prototype.isRoomy = function () {
            return hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        }
    };

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            const pcManufacturer = this.manufacturer;
            const kbManufacturer = this.keyboard.manufacturer;
            const monitorManufacturer = this.monitor.manufacturer;

            return pcManufacturer === kbManufacturer && pcManufacturer === monitorManufacturer;
        };

        classToExtend.prototype.isClassy = function () {
            if (this.battery.expectedLife < 3) {
                return false;
            }

            if (this.color !== 'Silver' && this.color !== 'Black') {
                return false;
            }

            if (this.weight >= 3) {
                return false;
            }

            return true;
        }        
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}
