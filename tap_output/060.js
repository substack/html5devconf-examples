var shoe = require('shoe');
var stream = shoe('/sock');

function plan (n) {
    stream.write('1..' + n + '\n');
}

var seq = 0;
function equal (x, y, msg) {
    stream.write(
        (x == y ? 'ok' : 'not ok')
        + ' ' + ++seq
        + (msg ? ' - ' + msg : '')
        + '\n'
    );
}

plan(3);
equal(1 + 1, 2);
equal('abcdefg'.toUpperCase(), 'ABCDEFG');
equal([1,2,3].map(function (x) { return x * 10 }), [10,20,30]);
