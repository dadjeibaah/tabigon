var Rx = require('rxjs/Rx');

var tabObservable = Rx.Observable.of(chrome.tabs.onCreate);

tabObservable.subscribe(function(){
   console.log("I have just been farred!");
});
