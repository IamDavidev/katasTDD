/**
 * to weird case kata with ts
 *
 *
 */

export function toWeirdCase(string: string): string {
	if (string === '' || string === ' ') return string

	const caseWord = string
		.split(' ')
		.map(word => {
			return word
				.split('')
				.map((letter, index) => {
					const isUpperCase = index % 2 === 0
					if (isUpperCase) return letter.toUpperCase()
					return letter
				})
				.join('')
		})
		.join(' ')
	return caseWord
}
