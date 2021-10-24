class BrowserInterface {
     static execScript(code) {
          browser.tabs.executeScript({
               code: code,
          })
     }
}

export default BrowserInterface;