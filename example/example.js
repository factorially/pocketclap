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

window.onload = function() {
    document.getElementById('addButton').addEventListener('click', function(){openWindow('add')});
    document.getElementById('searchButton').addEventListener('click', function(){openWindow('search')});
    document.getElementById('viewButton').addEventListener('click', function(){openWindow('view')});
    document.getElementById('removeButton').addEventListener('click', function(){openWindow('remove')});
    
    document.getElementById('addForm').addEventListener('submit', function(event) {
        saveData();
        event.preventDefault();
        window.location.reload();
    });
}