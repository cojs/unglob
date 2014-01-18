var unglob = require('..')

describe('unglob.list', function () {
  it('should unglob a list', function () {
    var list = unglob.list(['**/*.js'], [
      'directory.js',
      'something.css',
      'else.xml'
    ])

    list.should.eql(['directory.js'])
  })

  it('should ignore non-globs', function () {
    var list = unglob.list(['directory.js'], [
      'directory.js',
      'something.css',
      'else.xml'
    ])

    list.should.eql(['directory.js'])
  })
})