import memfs from 'memfs'

const tree = {
  'alpha/001-one.sql': 'alpha 001',
  'alpha/002-two.sql': 'alpha 002',
  'alpha/003-three.sql': 'alpha 003',
  'beta/001-one.sql': 'beta 001',
  'beta/002-two.sql': 'beta 002',
  'beta/003-three.sql': 'beta 003',
  'beta/prologue.sql': 'beta prologue',
  'gamma/001-one.sql': 'gamma 001',
  'gamma/002-two.sql': 'gamma 002',
  'gamma/003-three.sql': 'gamma 003',
  'gamma/prologue.sql': 'gamma prologue',
  'gamma/epilogue.sql': 'gamma epilogue',
  'delta/001-one.sql': 'delta 001',
  'delta/002-two.sql': 'delta 002',
  'delta/003-three.sql': 'delta 003',
  'delta/epilogue.sql': 'delta epilogue',
  'epsilon/001-one.sql': 'OK',
  'epsilon/002-two.sql': 'OK',
  'epsilon/002-two.js': 'Bad - not SQL',
  'epsilon/003-three.sql': 'OK',
  'epsilon/prologue.sql': 'OK',
  'epsilon/epilogue.sql': 'OK',
  'epsilon/report.sql': 'Bad - extraneous',
  'zeta/001-one.sql': '1',
  'zeta/002-two.sql': '2',
  'zeta/002-twobis.sql': '2bis',
  'zeta/003-three.sql': '3',
  'eta/001-one.sql': '1',
  'eta/003-three.sql': '3'
}

const vfs = new memfs.Volume()
vfs.mountSync('/test', tree)
vfs.mkdirSync('/test/alpha')
vfs.mkdirSync('/test/beta')
vfs.mkdirSync('/test/gamma')
vfs.mkdirSync('/test/delta')
vfs.mkdirSync('/test/epsilon')
vfs.mkdirSync('/test/zeta')
vfs.mkdirSync('/test/eta')
export default vfs
