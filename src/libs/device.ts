/**
 * サンプルDeviceクラス
 */
export class Device {
  public userAgent = ''

  /**
   * コンストラクタ
   */
  constructor(userAgent: string) {
    this.userAgent = userAgent
  }

  /**
   * Android判定
   */
  isAndroid() {
    return / Android/.test(this.userAgent)
  }

  /**
   * iOS判定
   */
  isIOS() {
    return / \(iP(?:hone|ad);/.test(this.userAgent)
  }

  /**
   * タブレット判定
   */
  isTablet() {
    const { width = 0, height = 0 } = globalThis?.screen || {}
    return this.isIOS()
      ? / \(iPad/.test(this.userAgent)
      : this.isAndroid()
      ? Math.min(width, height) >= 600
      : false
  }

  /**
   * 上記以外を PC判定とする
   */
  isPC() {
    return !this.isAndroid() && !this.isIOS() && !this.isTablet()
  }
}
