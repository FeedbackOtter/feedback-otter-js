import { Core } from '../index'
describe('Core Feedback package', () => {
  it('should only need to create a core instance with a callback', async () => {
    const fn = vi.fn()
    const core = Core.fromCallback(fn)

    await core.send()
    expect(fn).toHaveBeenCalled()
  })

  it('should return from `send` whatever the callback returns', async () => {
    const fn = (): string => 'hello'
    const core = Core.fromCallback(fn)

    const result = await core.send()
    expect(result).toBe('hello')
  })
})
