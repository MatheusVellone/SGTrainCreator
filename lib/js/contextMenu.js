var gui = require('nw.gui');

var contextmenu = new gui.Menu();

contextmenu.append(new gui.MenuItem({ label: 'Item A' }));
contextmenu.append(new gui.MenuItem({ label: 'Item B' }));
contextmenu.append(new gui.MenuItem({ type: 'separator' }));
contextmenu.append(new gui.MenuItem({ label: 'Item C' }));

// Add a item and bind a callback to item
contextmenu.append(new gui.MenuItem({
    label: 'Click Me',
    click: function() {
        var element = document.createElement('div');
        element.appendChild(document.createTextNode('Clicked OK'));
        document.body.appendChild(element);
    }
}));

document.body.addEventListener('contextmenu', function(ev) { 
    ev.preventDefault();
    contextmenu.popup(ev.x, ev.y);
    return false;
}, false);