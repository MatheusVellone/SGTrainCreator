var gui = require('nw.gui');
var win = gui.Window.get();
var menubar = new gui.Menu({
    type: 'menubar'
});

var sub1 = new gui.Menu();
sub1.append(new gui.MenuItem({
    label: 'Test1',
    click: function() {
        var element = document.createElement('div');
        element.appendChild(document.createTextNode('Test 1'));
        document.body.appendChild(element);
    }
}));

menubar.append(new gui.MenuItem({
    label: 'Sub1',
    submenu: sub1
}));
win.menu = menubar;