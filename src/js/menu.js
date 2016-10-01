var gui = require('nw.gui');
var win = gui.Window.get();
var menubar = new gui.Menu({
    type: 'menubar'
});

var sub1 = new gui.Menu();
sub1.append(new gui.MenuItem({
    label: 'Reload',
    click: function() {
        location.reload();
    }
}));

menubar.append(new gui.MenuItem({
    label: 'File',
    submenu: sub1
}));
win.menu = menubar;