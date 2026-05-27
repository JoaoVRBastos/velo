import { test, expect } from '@playwright/test'

test('deve consultar um pedido aprovado', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint')

  await page.getByRole('link', { name: 'Consultar Pedido' }).click()
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido')

  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-9TU01G')
  await page.getByRole('button', { name: 'Buscar Pedido' }).click()

  await expect(page.getByTestId('order-result-VLO-9TU01G')).toBeVisible({ timeout: 10_000 })

  await expect(page.getByText('APROVADO')).toBeVisible()
  await page.getByText('APROVADO').click();
});