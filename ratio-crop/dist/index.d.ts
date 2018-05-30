import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class RatioCrop extends IonicNativePlugin {
    /**
     * Crops an image
     * @param {string} pathToImage
     * @param {RatioCropOptions} [options]
     * @returns {Promise<string>} Returns a promise that resolves with the new image path, or rejects if failed to crop.
     */
    ratioCrop(pathToImage: string, options?: RatioCropOptions): Promise<string>;
}
