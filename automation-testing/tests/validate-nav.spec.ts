import { test, expect,  } from '@playwright/test';

test('Open Website', async ({ page }) => {
  await page.goto('file:///C://Users//u730166//Documents//KalingaAnimalWelfareWebsite//KalingaAnimalWelfare//index.html');

  // // Expect a title "to contain" a substring.
  await expect(page.getByRole('link', { name: 'Home', exact: true})).toBeVisible();
  await expect(page.getByLabel('Main navigation').getByRole('link', { name: 'Adopt' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Stories'})).toBeVisible();
  await expect(page.getByRole('link', { name: 'About Us'})).toBeVisible();
  await expect(page.getByRole('link', { name: 'Get Involved'})).toBeVisible();
  await expect(page.getByRole('link', { name: 'Contact Us'})).toBeVisible();
  await expect(page.getByLabel('Main navigation').getByRole('link', { name: 'Donate' })).toBeVisible();


  // await page.getByRole('textbox', { name: 'Corporate ID' }).click();
  // await page.getByRole('textbox', { name: 'Corporate ID' }).fill('DEMOCOMP5');
  // await page.getByRole('textbox', { name: 'Username' }).click();
  // await page.getByRole('textbox', { name: 'Username' }).fill('USER1');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill('password2');
  // await page.getByRole('button', { name: 'Login' }).click();

  // await test.info().attach('screenshot', {
  //   body: await page.screenshot(),
  //   contentType: 'image/png',
  // });
});

// test.afterEach(async ({ page }) => {
//   console.log(`Finished ${test.info().title} with status ${test.info().status}`);

//   if (test.info().status !== test.info().expectedStatus)
//     console.log(`Did not run as expected, ended up at ${page.url()}`);
// });

// test.afterAll('Teardown', async () => {
//   console.log('Done with tests');
// });



// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
