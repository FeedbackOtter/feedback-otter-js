import { Core } from '../index'
describe('s', () => {
  it('should create a new core instance', () => {
    const url = 'http://localhost:3000'
    const core = new Core({
      url,
      requestType: 'REST',
    })

    expect(core.url).toBe(url)
    expect(core.says()).toBe('hello')
  })
})
