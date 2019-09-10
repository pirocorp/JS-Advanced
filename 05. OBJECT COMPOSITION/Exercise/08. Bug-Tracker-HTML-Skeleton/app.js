function solve () {
    let _sortCondition = 'ID';  
    let _sortedReportKeys;  
    let _outputSelector;    
    const _reports = {};

    const _idGenerator = (function() {
        let i = 0;
        
        return function() {
            return i++;
        }
    })();

    const _sort = function () {
        let keys = Object.keys(_reports)

        if (_sortCondition === 'ID' ||
            _sortCondition === 'reproducible' ||
            _sortCondition === 'severity') {
            keys.sort((a, b) => _reports[a][_sortCondition] - _reports[b][_sortCondition]);
        } else {
            keys.sort((a, b) => _reports[a][_sortCondition].localeCompare(_reports[b][_sortCondition]));
        }

        _sortedReportKeys = Array.from(keys);
    };

    const _getReportElement = function(key) {
        const currentReport = _reports[key];
        const id = currentReport.ID;
        const description = currentReport.description;
        const author = currentReport.author;
        const status = currentReport.status;
        const severity = currentReport.severity;

        const innerHTML = 
`<div id="report_${id}" class="report">
  <div class="body">
    <p>${description}</p>
  </div>
  <div class="title">
    <span class="author">Submitted by: ${author}</span>
    <span class="status">${status} | ${severity}</span>
  </div>
</div>`;
    
    return innerHTML;
    };

    const _renderView = function() {
        const outputElement = document.querySelector(_outputSelector);

        outputElement.innerHTML = '';

        for (let i = 0; i < _sortedReportKeys.length; i++) {
            const key = _sortedReportKeys[i];
            const currentReportElement = _getReportElement(key);
            outputElement.innerHTML += currentReportElement;
        }
    };

    return {
        report: function (author, description, reproducible, severity) {
            const currentId = _idGenerator();

            const newReport = {
                ID: currentId,
                author: author,
                description: description,
                reproducible: reproducible,
                severity: severity,
                status: 'Open'
            }

            _reports[currentId] = newReport;
            _sort();
            _renderView();
        },

        setStatus: function(id, newStatus) {
            _reports[id].status = newStatus;
            
            if (_sortCondition === 'status') {
                _sort();
            }

            _renderView();
        },

        remove: function(id) {
            delete _reports[id];
            _sort();
            _renderView();
        },

        sort: function(condition) {
            _sortCondition = condition;  
            _sort(); 
            _renderView();         
        },

        output: function (selector) {
            _outputSelector = selector;            
        },
    }
}

const myModule = solve();

myModule.output('#content');

myModule.report('Zero', 'dd', true, 999);
myModule.report('Asen', 'Abc', false, 333);
myModule.report('Piro3', 'Test3', true, 222);
myModule.report('Faki', 'zzz', false, 65);
myModule.setStatus(3, 'Resolved');
myModule.remove(2);

myModule.sort('description');