import { assertEquals } from '@testing/asserts.ts'
import { josephus } from '../katas/code/JosephusPermutation.ts'


Deno.test('Josephus Permutation', async t => {
	const it = t.step

	await it('should be return empty array if the array is empty', () => {
		/**
		 * @Given
		 */
		const items: string[] = []
		const permutation = 3
		const expected: string[] = []

		/**
		 * @When
		 */

		const current = josephus(items, permutation)

		/**
		 * @Then
		 */
		assertEquals(current, expected)
	})

	await it('should return the same array if the permutation is 1', () => {
		/**
		 * @Given
		 */
		const items = ['C', 'o', 'd', 'e', 'W', 'a', 'r', 's']
		const permutation = 1
		const expected = ['C', 'o', 'd', 'e', 'W', 'a', 'r', 's']

		/**
		 * @When
		 */
		const current = josephus(items, permutation)

		/**
		 * @Then
		 */

		assertEquals(current, expected)
	})

	await it('should return [2, 4, 6, 8, 10, 3, 7, 1, 9, 5] when permutation is 2', () => {
		/**
		 * @Given
		 */
		const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		const permutation = 2
		const expected = [2, 4, 6, 8, 10, 3, 7, 1, 9, 5]

		/**
		 * @When
		 */
		const current = josephus(items, permutation)

		/**
		 * @Then
		 */

		assertEquals(current, expected)
	})

	await it("should reutrn ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a'] with permutation 4", () => {
		/**
		 * @Given
		 */
		const items = ['C', 'o', 'd', 'e', 'W', 'a', 'r', 's']
		const permutation = 4
		const expected = ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']

		/**
		 * @When
		 */

		const current = josephus(items, permutation)

		/**
		 * @Then
		 */

		assertEquals(current, expected)
	})
})
