var reloadShortcuts = ['r', 'R'];
document.addEventListener('keypress', function (e) {
    if (reloadShortcuts.indexOf(String.fromCharCode(e.which)) !== -1) {
        location.reload();
    }
});