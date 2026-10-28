
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MyapiSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = MyapiSDK.test()
    equal(testsdk instanceof MyapiSDK, true,
      'MyapiSDK.test() must return a client synchronously')
  })

})
