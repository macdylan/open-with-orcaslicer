chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
    const url = details.url;
    if (url.startsWith('bambustudioopen://')) {
        const newUrl = details.url.replace('bambustudioopen://', 'orcasliceropen://');
        chrome.tabs.update(details.tabId, { url: newUrl });
    } else if (url.startsWith('prusaslicer://')) {
        const newUrl = details.url.replace('prusaslicer://', 'orcasliceropen://');
        chrome.tabs.update(details.tabId, { url: newUrl });
    }
});
