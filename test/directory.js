var unglob = require('..')
var co = require('co')

describe('unglob.directory', function () {
  it('should unglob a directory', co(function* () {
    var list = yield* unglob.directory([
      '**/*.js'
    ], __dirname)

    list.should.eql(['directory.js', 'list.js'])
  }))

  it('should ignore non-globs', co(function* () {
    var list = yield* unglob.directory([
      'directory.js'
    ], __dirname)

    list.should.eql(['directory.js'])
  }))
})