/* 
 * pocketclass.js
 * Copyright (c) 2018 factorially. See LICENSE for details.
 */

function initPCL() {
    document.getElementById('menu').setAttribute('style', 'display:block');
    //Set any submit event listeners here.
}

function openWindow(windowID) {
    document.getElementById('menu').setAttribute('style', 'display:none');
    document.getElementById(windowID).setAttribute('style', 'display:block');
}

function writeData(storeName, storeData) {
    var stringStuff = JSON.stringify(storeData);
    localStorage.setItem(storeName, stringStuff);
}
function getData(storeName) {
    var stringStuff = localStorage.getItem(storeName);
    if (stringStuff == null) {
        return {};
    }
    return JSON.parse(stringStuff);
}
function countData(data) {
    var totalCountofData = 0;
    for (i in data) {
        totalCountofData++;
    }
    return totalCountofData;
}

window.onload = initPCL();