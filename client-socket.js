var net = require('net');
var client = new net.Socket();
client.connect(1337,'127.0.0.1',function(){
  console.log('connected');
  client.write('hello')
})
client.on('data',function(data){
console.log('Received: ' + data);
client.destroy();//Kill client after server's responce

})
client.on('close',function(){
  console.log('conn closed')
})