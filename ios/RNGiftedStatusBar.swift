//
//  RNGiftedStatusBar.swift
//  GiftedStatusBar
//
//  Created by Evan Bacon on 2/10/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

import Foundation
import UIKit

@objc(RNGiftedStatusBarViewManager)
class RNGiftedStatusBarViewManager : RCTViewManager {
  override func view() -> UIView! {
    return RNGiftedStatusBarView()
  }
}

@objc(RNGiftedStatusBarView)
class RNGiftedStatusBarView: UIView {
  
  /// Get Status Bar
  fileprivate var statusBar: UIWindow? {
    return UIApplication.shared.value(forKey: "statusBarWindow") as? UIWindow
  }
  
  
  func setTranslation(_ value: NSNumber) {
    self.translationY = CGFloat(value)
  }
  
  var translationY:CGFloat = 0 {
    didSet {
      guard let statusBar = statusBar else {return}
      statusBar.transform = CGAffineTransform(translationX: 0, y: translationY)
    }
  }
  
  func setStatusColor(_ color: NSNumber) {
    self.color = RCTConvert.uiColor(color)
  }
  
  var color:UIColor? {
    didSet {
      guard let statusBar = statusBar, let color = color else {return}
      let offset:CGFloat = 500
      for subview in statusBar.subviews {
        if let statusBar = subview as? UIView {
          for subview in statusBar.subviews {
            print("Child A", subview)
            for subview in subview.subviews {
              print("Child B", subview)
              
              /// Build a shadow and move the original
              subview.layer.shadowColor = color.cgColor
              subview.layer.shadowOpacity = 1
              subview.layer.shadowRadius = 0
              subview.layer.shadowOffset = CGSize(width: 0, height: offset)
              subview.frame.origin.y = -offset
              for subview in subview.subviews {
                print("Child C", subview)
                
                //                if let imageView = subview as? UIImageView {
                //                  imageView.image = imageView.image!.withRenderingMode(.alwaysTemplate)
                //                  imageView.tintColor = UIColor.purple
                //                }
              }
            }
          }
        }
      }
    }
  }
  
  override init(frame: CGRect) {
    super.init(frame: frame)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
}

