import { assertEquals } from '@testing/asserts.ts'
import { describe, it } from '@testing/bdd.ts'
import { manufacture } from '../../katas/advent/manufacture.ts'

describe('List of gifts: string[]', () => {
	it('should return an empty list when there are no gifts: string[]', () => {
		/**
		 * @Given gifts: string[] = []
		 * @And materials = ''
		 */
		const gifts: string[] = []
		const materials = ''

		/**
		 * @When
		 */
		const current = manufacture(gifts, materials)

		/**
		 * @Then
		 */
		const expected = [] as string[]
		assertEquals(current, expected)
	})

	it('should return all gifts: string[] when all materials are available', () => {
		/**
		 * @Given gifts: string[] = ['car', 'dog', 'cat']
		 * @And materials = 'cdratog'
		 */
		const gifts: string[] = ['car', 'dog', 'cat']
		const materials = 'cdratog'

		/**
		 * @When
		 */
		const current = manufacture(gifts, materials)

		/**
		 * @Then
		 */
		const expected = ['car', 'dog', 'cat']
		assertEquals(current, expected)
	})

	it('should handle gifts: string[] with repeated characters', () => {
		/**
		 * @Given gifts: string[] = ['moon', 'moo', 'noon']
		 * @And materials = 'mon'
		 */
		const gifts: string[] = ['moon', 'moo', 'noon']
		const materials = 'mon'

		/**
		 * @When
		 */
		const current = manufacture(gifts, materials)

		/**
		 * @Then
		 */
		const expected = ['moon', 'moo']
		assertEquals(current, expected)
	})

	it('should handle gifts: string[] with special characters', () => {
		/**
		 * @Given gifts: string[] = ['gift@1', 'gift$2', 'gift#3']
		 * @And materials = 'gift@12#3$'
		 */
		const gifts: string[] = ['gift@1', 'gift$2', 'gift#3']
		const materials = 'gift@12#3$'

		/**
		 * @When
		 */
		const current = manufacture(gifts, materials)

		/**
		 * @Then
		 */
		const expected = ['gift@1', 'gift$2', 'gift#3']
		assertEquals(current, expected)
	})

	it('should handle an empty list of materials', () => {
		/**
		 * @Given gifts: string[] = ['tren', 'oso', 'pelota']
		 * @And materials = ''
		 */
		const gifts: string[] = ['tren', 'oso', 'pelota']
		const materials = ''

		/**
		 * @When
		 */
		const current = manufacture(gifts, materials)

		/**
		 * @Then
		 */
		const expected = [] as string[]
		assertEquals(current, expected)
	})

	it('should handle an empty list of gifts: string[]', () => {
		/**
		 * @Given gifts: string[] = []
		 * @And materials = 'abc'
		 */
		const gifts: string[] = []
		const materials = 'abc'

		/**
		 * @When
		 */
		const current = manufacture(gifts, materials)

		/**
		 * @Then
		 */
		const expected = [] as string[]
		assertEquals(current, expected)
	})

	it('should handle a mix of available and unavailable materials', () => {
		/**
		 * @Given gifts: string[] = ['apple', 'banana', 'orange']
		 * @And materials = 'anorg'
		 */
		const gifts: string[] = ['apple', 'banana', 'orange']
		const materials = 'anorg'

		/**
		 * @When
		 */
		const current = manufacture(gifts, materials)

		/**
		 * @Then
		 */
		const expected = ['banana', 'orange']
		assertEquals(current, expected)
	})

	it('should handle uppercase and lowercase letters in materials', () => {
		/**
		 * @Given gifts: string[] = ['Train', 'Car', 'Bus']
		 * @And materials = 'TrAincArbUs'
		 */
		const gifts: string[] = ['Train', 'Car', 'Bus']
		const materials = 'TrAincArbUs'

		/**
		 * @When
		 */
		const current = manufacture(gifts, materials)

		/**
		 * @Then
		 */
		const expected = ['Train', 'Car', 'Bus']
		assertEquals(current, expected)
	})

	it('should handle gifts: string[] that require spaces', () => {
		/**
		 * @Given gifts: string[] = ['red apple', 'blueberry', 'green pear']
		 * @And materials = 'reda@pplebl#ueberr@ygreenp$ear'
		 */
		const gifts: string[] = ['red apple', 'blueberry', 'green pear']
		const materials = 'reda@pplebl#ueberr@ygreenp$ear'

		/**
		 * @When
		 */
		const current = manufacture(gifts, materials)

		/**
		 * @Then
		 */
		const expected = ['red apple', 'blueberry', 'green pear']
		assertEquals(current, expected)
	})

	it('should handle large lists of gifts: string[] and materials', () => {
		/**
		 * @Given gifts: string[] = ['toy1', 'toy2', 'toy3', 'toy4']
		 * @And materials = 'toy1toy2toy3toy4'
		 */
		const gifts: string[] = ['toy1', 'toy2', 'toy3', 'toy4']
		const materials = 'toy1toy2toy3toy4'

		/**
		 * @When
		 */
		const current = manufacture(gifts, materials)

		/**
		 * @Then
		 */
		const expected = ['toy1', 'toy2', 'toy3', 'toy4']
		assertEquals(current, expected)
	})
})
