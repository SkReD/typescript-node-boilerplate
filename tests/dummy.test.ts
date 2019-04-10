import Dummy from '../src/dummy'
import { expect } from 'chai'

describe('dummy test', () => {
  it('getThing should return "thing"', () => {
    expect(Dummy.returnThing()).to.equal('thing')
  })
})
