import { test, expect } from '@playwright/test';

test('Iniciar sesión en SauceDemo', async ({ page }) => {

  // abrir la pagina
  await page.goto('https://www.saucedemo.com/');

  // ingresar usuario lentamente
  await page.getByPlaceholder('Username').pressSequentially('standard_user', { delay: 150 });

  // ingresar contraseña lentamente
  await page.getByPlaceholder('Password').pressSequentially('secret_sauce', { delay: 150 });

  // pausa para observar los campos
  await page.waitForTimeout(1000);

  // hacer clic en iniciar sesion
  await page.getByRole('button', { name: 'Login' }).click();

  // validar que el login fue exitoso
  await expect(page).toHaveURL(/inventory/);
});