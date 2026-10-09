import {test, expect} from "@playwright/test"

//nombre de caso de prueba

test ("TC01 INICIO DE SESSION CON USUARIO Y CONTRASEñA VALIDA",async ({page})=>{

  // abril la pagina que vamos a probar

  await page.goto("https://www.saucedemo.com/");

  //ingresar usuario lento como lo escribe un humano
  await page.getByPlaceholder("Username").pressSequentially("standard_user",{delay:150});

  //ingresar la contraseña lento como lo escribe un humano

  await page.getByPlaceholder("Password").pressSequentially("secret_sauce",{delay:150});

  //pausa la ver los compos completados

  await page.waitForTimeout(1000);

  //ahora hacer clic en el boton de login

  await page.getByRole("button",{name:"Login"}).click();

  





});