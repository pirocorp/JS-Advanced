function attachEventsListeners() {
    function getSelectedValue(selectElement) {
        return selectElement.options[selectElement.selectedIndex].value;
    }

    function converter(e) {
        const conversions = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254,
        }

        const inputDistance = document.getElementById('inputDistance').value;  
        const inputUnits = getSelectedValue(document.getElementById('inputUnits'));
        const outputUnits = getSelectedValue(document.getElementById('outputUnits'));
        const outputElement = document.getElementById('outputDistance');

        const inputConversion = conversions[inputUnits];
        const outputConversion = conversions[outputUnits];

        const result = (inputDistance * inputConversion) / outputConversion;

        outputElement.value = result;
    }

    const button = document.getElementById('convert');
    button.addEventListener('click', converter);
}