/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
document.getElementById("BotonazoG").addEventListener("click",accion1);
document.getElementById("BotonazoR").addEventListener("click",accion2);
document.getElementById("BotonazoQ").addEventListener("click",accion3);
document.getElementById("BotonazoV").addEventListener("click",accion4);
document.getElementById("BotonazoN").addEventListener("click",accion5);
document.getElementById("BotonazoS").addEventListener("click",accion6);


function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    debugger;
    console.log(device.cordova);  
}

function accion1(){
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
 
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
 
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    debugger;
}

function accion2(){
  debugger;
    var networkState = navigator.connection.type;

  /* var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';*/

    alert('Connection type: ' +  networkState);
}

function accion3(){
    debugger;
    var positionTxt="No location detected :v ";
    var onSuccess = function(position) {
        positionTxt= position.coords.latitude +" "+ position.coords.longitude;
    };
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            debugger;                    
            alert("Se obtubo lo siguiente \n" +
                  "Resultado: " + result.text + "\n" +
                  "Formato: " + result.format + "\n" +
                  "Canelado: " + result.cancelled+ "\n" +
                  "Posicion: "+positionTxt) ;
                
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
     );
}

function accion4(){
  console.log("P4");
  navigator.vibrate([1000, 1000, 3000, 1000, 5000]);
}

function accion5(){
  console.log("P5");
  navigator.notification.alert(
    'You are the winner!',  // message
    alertDismissed,         // callback
    'Game Over',            // title
    'Done'                  // buttonName
);
}

function alertDismissed() {
    console.log("Dismised");
}



  function accion6(){
    debugger;
    console.log("P6");
    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    }
    
    function onError() {
        alert('onError!');
    }
    
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
  }
  