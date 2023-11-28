import aliveServer from 'alive-server'

aliveServer.start({
  port: 7000,
  host: 'localhost',
  root: 'output',
  open: false,
  ignore: 'node_modules',
  wait: 0,
})
