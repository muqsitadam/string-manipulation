var saying = 'Classic vintage vehicle ';

var msg = '<h2>Length</h2><p>' + saying.length + '</p>';

msg += '<h2>Uppercase</h2><p>' + saying.toUpperCase() + '</p>';

msg += '<h2>Lowercase</h2><p>' + saying.toLowerCase() + '</p>';

msg += '<h2>Character index: 12</h2><p>' + saying.charAt(12) + '</p>';

msg += '<h2>First ag</h2><p>' + saying.indexOf('ag') + '</p>';

msg += '<h2>Last e</h2><p>' + saying.lastIndexOf('e') + '</p>';

msg += '<h2>Character index: 8-15</h2><p>' + saying.substring(8, 15) + '</p>';

msg += '<h2>Replace</h2><p>' + saying.replace('ic', 'y') + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;
