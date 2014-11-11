// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

document.getElementById("btnDale").addEventListener("click",function(){

  var db = openDatabase('MyDB', '1.0', 'My Sample DB', 100 * 1024);
  var db2 = openDatabase('mydb3','1.0','My database',5*1024*1024,function(a){
    a.transaction(function(tx) {

      tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
      tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar")');
      tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")');
    }, errorCB, successCB);


  });

  db.transaction(function(tx) {

    tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
    //tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar")');
    //tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")');
  }, errorCB, successCB);



});
    document.getElementById("btnLee").addEventListener("click",function(){

      var db = openDatabase('MyDB', '1.0', 'My Sample DB', 100 * 1024);
      db.transaction(function(tx) {

        tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
          var len = results.rows.length, i;
          var msg = "<p>Found rows: " + len + "</p>";

          for (i = 0; i < len; i++){
            msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
            alert(msg);
          }
        }, errorCB, successCB);
      }, errorCB, successCB);



    });
  });

function errorCB(tx){
  alert(tx.toString());


}
      function successCB(){
        alert("Creada");


      }
})
