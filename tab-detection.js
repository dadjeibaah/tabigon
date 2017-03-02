var USER_DEFINED_DELAY = 5000;
var $tabs = [];
var Rx = require('rxjs/Rx');
function tabWatcher(tab){

    var tabObservable = Rx.Observable
        .of(tab)
        .delay(USER_DEFINED_DELAY);
 tabObservable.subscribe(function(tab){
    chrome.tabs.remove(tab.id);
 });
}
function bootStrap(){

    chrome.tabs.onCreated.addListener(tabWatcher);

}

document.addEventListener('DOMContentLoaded', function() {
bootStrap();
});