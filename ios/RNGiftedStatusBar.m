//
//  RNGiftedStatusBar.m
//  GiftedStatusBar
//
//  Created by Evan Bacon on 2/10/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import <React/RCTView.h>

@interface RNGiftedStatusBarView: RCTView
@property (nonatomic, assign) NSNumber *statusColor;
@property (nonatomic, assign) NSNumber *translation;

@end

@interface RCT_EXTERN_MODULE(RNGiftedStatusBarViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(statusColor, NSNumber);
RCT_EXPORT_VIEW_PROPERTY(translation, NSNumber);

@end
