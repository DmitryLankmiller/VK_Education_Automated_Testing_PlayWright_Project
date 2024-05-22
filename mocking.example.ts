const {webkit, chromium, firefox, devices} = require('playwright');

(async () => {
    const browser = await chromium.launch({
      headless: false,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    context.route('**/*', route => {
      if (route.request().resourceType() !== 'image')         // если не картинка возвращаемся
        return route.continue();

      const LOREM_FLICKR = 'https://loremflickr.com';
      if (route.request().url().startsWith(LOREM_FLICKR))  // чтобы не попасть в цикл
        return route.continue();

      route.fulfill({
        status: 301,
        headers: {
          location: LOREM_FLICKR + '/320/240/fox',
         },
      });
    });
    await page.goto('https://youtube.com');
  })();