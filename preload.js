const { app, clipboard, globalShortcut } = require('electron')

//剪贴板
window.clipboard = clipboard
//快捷键不好使，TODO
window.setShortcut = (shortcut, callback) => {
  app.on('ready', () => {
    return globalShortcut.register(shortcut, callback)
  })
}
