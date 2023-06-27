module.exports = {
    use: {
      baseURL: "https://www.saucedemo.com/",
      browserName: "chromium",
      headless: true,
      screenshot: "on",
      video: "retain-on-failure",
      trace: "retain-on-failure"
    },
    reporter: [["allure-playwright"]],
  };
  