import { type Lights, adjustLights } from '../../katas/advent/adjust-lights.ts'
import { assertEquals } from '@testing/asserts.ts'

export function checkChangesAreCorrect(
	lights: Lights,
	expectedChanges: number
) {
	/**
	 * @When
	 */
	const changes = adjustLights(lights)

	/**
	 * @Then
	 */

	assertEquals(changes, expectedChanges)
}

Deno.test('adjust-lights', async t => {
	const it = t.step
	await it('should return 0 when lights are already in order', () => {
		/**
		 * @Given
		 */
		const lights: Lights = ['🟢', '🔴']
		const expectedChanges = 0

		/**
		 * @Run
		 */
		checkChangesAreCorrect(lights, expectedChanges)
	})

	await it('should return 1 when lights are in wrong order', () => {
		/**
		 * @Given
		 */
		const lights: Lights = ['🔴', '🟢', '🟢']
		const expectedChanges = 1

		/**
		 * @Run
		 */
		checkChangesAreCorrect(lights, expectedChanges)
	})

	await it('should return 2 when lights are in wrong order', () => {
		/**
		 * @Given
		 */
		const lights: Lights = ['🔴', '🔴', '🔴', '🔴']
		const expectedChanges = 2

		/**
		 * @Run
		 */
		checkChangesAreCorrect(lights, expectedChanges)
	})
})
