const { exec } = require('child_process')

exec(
  'pbjs -t static-module ./lib/SearchFleaMarket.proto > ./lib/SearchFleaMarket_pb.js'
)
