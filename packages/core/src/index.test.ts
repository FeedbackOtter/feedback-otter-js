import { Core } from './index'
describe('s', () => {
  it('should work', () => {
    const core = new Core()
    expect(core.name).toBe('core')
    expect(core.says()).toBe('hello')
  })
})
