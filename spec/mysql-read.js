var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component();

  c.inPorts.add('in', function (event, payload) {
    console.log("ppp");
    if (event !== 'data') {
      return;
    }
    // Do something with the packet, then
    c.outPorts.out.send(payload);
  });
  c.outPorts.add('out');
  return c;
};