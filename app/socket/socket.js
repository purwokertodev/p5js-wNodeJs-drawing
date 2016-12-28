'use strict';

let io = require('socket.io');

module.exports = function(server){
  let listener = io.listen(server);
    listener.sockets.on('connection', (socket) => {
      console.log("We have a new client: " + socket.id);

      socket.on('mouse',
        function(data) {
          console.log("Received: 'mouse' " + data.x + " " + data.y);

          // Send it to all other clients
          socket.broadcast.emit('mouse', data);

          // This is a way to send to everyone including sender
          // io.sockets.emit('message', "this goes to everyone");

        }
      );

      socket.on('disconnect', function() {
        console.log("Client has disconnected");
      });
    });
};
