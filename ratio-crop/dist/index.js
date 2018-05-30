var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name RatioCrop
 * @description
 * Crops images
 *
 * @usage
 * ```typescript
 * import { RatioCrop } from '@ionic-native/ratio-crop';
 *
 *
 * constructor(private ratioCrop: RatioCrop) { }
 *
 * ...
 *
 *
 * this.ratioCcrop.ratioCrop('path/to/image.jpg', {quality: 75})
 *   .then(
 *     newImage => console.log('new image path is: ' + newImage),
 *     error => console.error('Error cropping image', error)
 *   );
 * ```
 * @interfaces
 * RatioCropOptions
 */
var RatioCrop = (function (_super) {
    __extends(RatioCrop, _super);
    function RatioCrop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Crops an image
     * @param {string} pathToImage
     * @param {RatioCropOptions} [options]
     * @returns {Promise<string>} Returns a promise that resolves with the new image path, or rejects if failed to crop.
     */
    RatioCrop.prototype.ratioCrop = function (pathToImage, options) {
        return;
    };
    RatioCrop.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RatioCrop.ctorParameters = function () { return []; };
    __decorate([
        Cordova({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], RatioCrop.prototype, "ratioCrop", null);
    RatioCrop = __decorate([
        Plugin({
            pluginName: 'RatioCrop',
            plugin: 'cordova-plugin-ratio-crop',
            pluginRef: 'plugins',
            repo: 'https://github.com/peterantonyrausch/cordova-plugin-ratio-crop',
            platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], RatioCrop);
    return RatioCrop;
}(IonicNativePlugin));
export { RatioCrop };
//# sourceMappingURL=index.js.map