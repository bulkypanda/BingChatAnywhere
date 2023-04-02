chrome.webRequest.onBeforeSendHeaders.addListener((stuff) => {
      const useragent = stuff.requestHeaders.find((header) => header.name.toLowerCase() === "user-agent");
      useragent.value = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.100.0";
      return { requestHeaders: stuff.requestHeaders }; }, {urls: ["https://www.bing.com/*"]}, ["blocking", "requestHeaders"]);
