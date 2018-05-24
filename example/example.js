/* 
 * Copyright (c) 2018 factorially. See LICENSE for details.
 */

function saveData() {
    var dataKey = document.getElementById('dataKey').value;
    var dataValue = document.getElementById('dataValue').value;
    var stuffToSave = {
        key: dataKey,
        value: dataValue
    };
    var stuff = getData('demoStorage');
    var stuffSize = countData(stuff);
    stuff[stuffSize] = stuffToSave;
    writeData('demoStorage', stuff);
    //window.location.reload();
}
function searchData() {
    var searchFor = document.getElementById('searchFor').value;
    var stuff = getData('demoStorage');
    var results = {};
    var resultsCount = 0;
    for (i in stuff) {
        if (stuff[i].key.indexOf(searchFor) != -1 || stuff[i].value.indexOf(searchFor) != -1) {
            results[resultsCount] = stuff[i];
            resultsCount++;
        }
    }
    document.getElementById('results').innerHTML = '<p>Showing search results for <i>' + searchFor + '</i>... ' + resultsCount + ' matches found.';
    for (i in results) {
        var newEl = document.createElement('p');
        newEl.innerHTML = 'Key: <b>' + results[i].key + '</b>, Value: ' + results[i].value;
        document.getElementById('results').appendChild(newEl);
    }
}
function viewData() {
    var stuff = getData('demoStorage');
    for (i in stuff) {
        var newEl = document.createElement('p');
        newEl.innerHTML = 'Key: <b>' + stuff[i].key + '</b>, Value: ' + stuff[i].value;
        document.getElementById('allData').appendChild(newEl);
    }
}

window.onload = function() {
    // Buttons
    document.getElementById('addButton').addEventListener('click', function(){openWindow('add')});
    document.getElementById('searchButton').addEventListener('click', function(){openWindow('search')});
    document.getElementById('viewButton').addEventListener('click', function(){openWindow('view');viewData();});
    document.getElementById('removeButton').addEventListener('click', function(){openWindow('remove')});
    
    // Forms (can't let the browser acutally submit the form, or BAD things could happen!)
    document.getElementById('addForm').addEventListener('submit', function(event) {
        saveData();
        event.preventDefault();
        window.location.reload();
    });
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        searchData();        
        event.preventDefault();
    });
    document.getElementById('removeForm').addEventListener('submit', function(event) {
        //Finalize the removal
        event.preventDefault();
        window.location.reload();
    });
}