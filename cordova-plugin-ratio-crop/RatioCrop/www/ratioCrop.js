var exec = require('cordova/exec');

var ratioCrop = module.exports = function ratioCropImage(success, fail, image, options) {
    options = options || {};
    options.quality = options.quality || 100;
    options.targetWidth = options.targetWidth || -1;
    options.targetHeight = options.targetHeight || -1;
    options.widthRatio = options.widthRatio || -1; 
    options.heightRatio = options.heightRatio || -1;
    return exec(success, fail, 'RatioCrop', 'ratioCropImage', [image, options])
  };
  
  module.exports.promise = function ratioCropAsync(image, options) {
    return new Promise(function (resolve, reject) {
      ratioCrop(resolve, reject, image, options)
    })
  };