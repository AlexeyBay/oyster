var AppError = require("../errors"),
    Ios = require("./ios");

function Notification() {

}

/**
 *
 * @param options
 * @param options.gateway
 * @param options.key
 * @param options.certificate
 * @param options.address
 */
Notification.prototype.setIOSClient = function addIOSClient(options) {
    this.ios_client = new Ios(options);
};

// Notification.prototype.setAndroidClient = function addAndroidClient(){

// };

// Notification.prototype.setGoogleGlassClient = function addAndroidClient(){

// };

// Notification.prototype.setWindowsClient = function addAndroidClient(){

// };


Notification.prototype.send = function send(devices, data, is_silent) {
    this.sendToIOS(devices, data, is_silent);
};

Notification.prototype.sendToIOS = function sendToIOS(devices, data, is_silent) {

    if (!this.ios_client) {
        throw new AppError.notFoundError(null, "IOS client");
    }

    this.ios_client.send(devices, data, is_silent);

    return;
};

module.exports = Notification;

// Notification.prototype.sendToAndroid = function sendToIOS (devices, data){

// };

// Notification.prototype.sendToGoogleGlass = function sendToIOS (devices, data){

// };

// Notification.prototype.sendToWindows = function sendToIOS (devices, data){

// };
