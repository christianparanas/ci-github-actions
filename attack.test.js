
const attack = require('./attack')


test('should return damage sentence when called correctly', () => {
	const result = attack('Ogre', 23)

	expect(result).toMatch(/^Ogre(.*)23/)
})