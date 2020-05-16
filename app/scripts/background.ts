// Enable chromereload by uncommenting this line:
import 'chromereload/devonly';

chrome.tabs.onUpdated.addListener((tabId, tabChangeInfo) => {
  // TODO: Make configurable
  const currentWindow = true;
  if (tabChangeInfo.url) {
    chrome.tabs.query({currentWindow: currentWindow, url: tabChangeInfo.url}, (tabs) => {
      // Start with index 1 instead of 0, as we want the first tab to remain
      for (let i = 1; i < tabs.length; i++) {
        const tab = tabs[i];
        const tabId = tab.id;
        if (tabId) {
          chrome.tabs.remove(tabId, () => {
          });
        }
      }
    });
  }
});
