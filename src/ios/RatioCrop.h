#import <Cordova/CDVPlugin.h>
#import "PECropViewController.h"

@interface RatioCrop : CDVPlugin <PECropViewControllerDelegate>
- (void) ratioCropImage:(CDVInvokedUrlCommand *) command;
@end