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

export interface RatioCropOptions {
  quality?: number;
  targetHeight?: number;
  targetWidth?: number;
  widthRatio?: number;
  heightRatio?: number;
}

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
@Plugin({
  pluginName: 'RatioCrop',
  plugin: 'cordova-plugin-ratio-crop', // npm package name, example: cordova-plugin-camera
  pluginRef: 'plugins', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/peterantonyrausch/cordova-plugin-ratio-crop', // the github repository URL for the plugin
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class RatioCrop extends IonicNativePlugin {

  /**
   * Crops an image
   * @param {string} pathToImage
   * @param {RatioCropOptions} [options]
   * @returns {Promise<string>} Returns a promise that resolves with the new image path, or rejects if failed to crop.
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  ratioCrop(pathToImage: string, options?: RatioCropOptions): Promise<string> {
    return;
  }
}
