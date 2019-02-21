const timeout = 5000;

describe(
    '/ (Home Page)',
    () => {
        let page;
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage();
            await page.goto('https://www.saucedemo.com/');
        }, timeout);

        it('should load without error', async () => {
            const text = await page.evaluate(() => document.body.textContent);
            expect(text).toContain('application');
        });

        it('Should login with username and fail', async () => {
            let input = await page.$("#user-name");
            await input.click({ clickCount: 3 });
            await input.type("puppeteer");
            let button = await page.$("input.login-button");
            await button.click();

            const text = await page.evaluate(() => document.body.textContent);
            expect(text).toContain('Password is required');
        });

        it('Should login with username and password and fail', async () => {
            let usernameInput = await page.$("#user-name");
            await usernameInput.click({ clickCount: 3 })
            await usernameInput.type("puppeteer");
            let passwordInput = await page.$("#password");
            await passwordInput.click({ clickCount: 3 })
            await passwordInput.type("puppeteer");

            let button = await page.$("input.login-button");
            await button.click();

            const text = await page.evaluate(() => document.body.textContent);
            expect(text).toContain('Username and password do not match any user in this service');
        });
    },
    timeout,
);
