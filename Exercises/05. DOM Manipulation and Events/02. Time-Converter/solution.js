function attachEventsListeners() {

    function getCorrespondentInputElement(buttonElement) {
        return buttonElement.parentElement.querySelector('input[type=text]');
    }

    function getCorrespondentInputType(buttonElement) {
        return buttonElement.parentElement.querySelector('label').textContent
            .split(':')
            .map(x => x.trim())
            .filter(x => x !== '')[0];
    }

    const converter = (function () {
        const inputElements = (function () {
            const buttons = document.querySelectorAll('input[type=button]');
            const inputElements = {};

            //Testing system doesn't support forEach
            //buttons.forEach(b => inputElements[getCorrespondentInputType(b)] = getCorrespondentInputElement(b));
            for (let i = 0; i < buttons.length; i++) {
                const currentButton = buttons[i];
                inputElements[getCorrespondentInputType(currentButton)] = getCorrespondentInputElement(currentButton)
            }

            return inputElements;
        })();

        const converterFunctions = (function () {
            const CONSTANTS = {
                HOURS_PER_DAY: 24,
                MINUTES_PER_HOUR: 60,
                SECONDS_PER_MINUTE: 60,
            }

            const functions = {
                Days: {
                    Hours: (days) => { return days * CONSTANTS.HOURS_PER_DAY },
                    Minutes: (days) => { return days * CONSTANTS.HOURS_PER_DAY * CONSTANTS.MINUTES_PER_HOUR },
                    Seconds: (days) => { return days * CONSTANTS.HOURS_PER_DAY * CONSTANTS.MINUTES_PER_HOUR * CONSTANTS.SECONDS_PER_MINUTE },
                },

                Hours: {
                    Days: (hours) => { return hours / CONSTANTS.HOURS_PER_DAY },
                    Minutes: (hours) => { return hours * CONSTANTS.MINUTES_PER_HOUR },
                    Seconds: (hours) => { return hours * CONSTANTS.MINUTES_PER_HOUR * CONSTANTS.SECONDS_PER_MINUTE },
                },

                Minutes: {
                    Days: (minutes) => { return minutes / (CONSTANTS.MINUTES_PER_HOUR * CONSTANTS.HOURS_PER_DAY) },
                    Hours: (minutes) => { return minutes / CONSTANTS.MINUTES_PER_HOUR },
                    Seconds: (minutes) => { return minutes * CONSTANTS.SECONDS_PER_MINUTE },
                },

                Seconds: {
                    Days: (seconds) => { return seconds / (CONSTANTS.SECONDS_PER_MINUTE * CONSTANTS.MINUTES_PER_HOUR * CONSTANTS.HOURS_PER_DAY) },
                    Hours: (seconds) => { return seconds / (CONSTANTS.SECONDS_PER_MINUTE * CONSTANTS.MINUTES_PER_HOUR) },
                    Minutes: (seconds) => { return seconds / CONSTANTS.SECONDS_PER_MINUTE },
                },
            }

            return functions;
        })();

        return result = {
            getOutputElements: (inputElement) => {
                const result = {};

                for (const key in inputElements) {
                    if (key !== inputElement) {
                        result[key] = inputElements[key];
                    }
                }

                return result;
            },

            getConverterFunctions: (inputElement) => {
                return converterFunctions[inputElement];
            }
        }
    })();

    function convertData(e) {
        const inputElement = getCorrespondentInputElement(e.currentTarget);

        const inputValue = inputElement.value;
        const inputType = getCorrespondentInputType(e.currentTarget);

        const outputElements = converter.getOutputElements(inputType);
        const converterFunctions = converter.getConverterFunctions(inputType);

        for (const key in outputElements) {
            outputElements[key].value = converterFunctions[key](inputValue);
        }
    }

    const buttons = document.querySelectorAll('input[type=button]');

    //Testing system doesn't support forEach
    //buttons.forEach(b => b.addEventListener('click', convertData));

    for (let i = 0; i < buttons.length; i++) {
        const currentButton = buttons[i];
        currentButton.addEventListener('click', convertData)
    }
}