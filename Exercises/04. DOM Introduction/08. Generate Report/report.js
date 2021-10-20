function generateReport() {
    const columnNames = Array.from(document
        .querySelectorAll('table thead tr th'))
        .map(t => {
            const propName = t.textContent.split(' ').join('');

            return propName[0].toLocaleLowerCase() + propName.slice(1);
        });

    const selectedColumns = Array.from(document
        .querySelectorAll('table thead tr th input'))
        .map(i => i.checked);

    const tableData = Array.from(document.querySelectorAll('tbody tr'));
    
    const result = [];

    tableData.forEach(tr => {
        const record = {};

        const properties = Array.from(tr.children);

        for (let i = 0; i < properties.length; i++) {
            const prop = properties[i];
            
            if(selectedColumns[i]) {
                record[columnNames[i]] = prop.textContent;
            }
        }

        result.push(record);
    });

    const outputElement = document.getElementById('output');
    outputElement.value = JSON.stringify(result, null, 2);
}