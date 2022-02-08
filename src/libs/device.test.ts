import { Device } from './device'

const testUserAgent = {
  iPhone: {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
    width: 414,
    height: 736,
    expects: {
      isIOS: true,
      isAndroid: false,
      isTablet: false,
      isPC: false,
    },
  },
  android: {
    userAgent:
      'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Mobile Safari/537.36',
    width: 411,
    height: 823,
    expects: {
      isIOS: false,
      isAndroid: true,
      isTablet: false,
      isPC: false,
    },
  },
  iPadPro: {
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
    width: 1020,
    height: 1366,
    expects: {
      isIOS: true,
      isAndroid: false,
      isTablet: true,
      isPC: false,
    },
  },
  androidTablet: {
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; AGR-L09; HMSCore 6.1.0.313) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.93 HuaweiBrowser/11.1.4.302 Safari/537.36',
    width: 800,
    height: 600,
    expects: {
      isIOS: false,
      isAndroid: true,
      isTablet: true,
      isPC: false,
    },
  },
  WindowsEdge: {
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36 Edg/95.0.1020.30',
    width: 1920,
    height: 1080,
    expects: {
      isIOS: false,
      isAndroid: false,
      isTablet: false,
      isPC: true,
    },
  },
}

describe('UserAgent', () => {
  let screenSpy: any
  const originalScreen = { ...window.screen }

  beforeEach(() => {
    screenSpy = jest.spyOn(window, 'screen', 'get')
  })

  afterEach(() => {
    screenSpy.mockRestore()
  })

  for (const [name, { userAgent, width, height, expects }] of Object.entries(testUserAgent)) {
    it(name, () => {
      screenSpy.mockImplementation(() => ({
        ...originalScreen,
        width,
        height,
      }))

      const device = new Device(userAgent)

      expect(device.isIOS()).toBe(expects.isIOS)
      expect(device.isAndroid()).toBe(expects.isAndroid)
      expect(device.isTablet()).toBe(expects.isTablet)
      expect(device.isPC()).toBe(expects.isPC)
    })
  }
})
