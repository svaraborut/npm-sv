// spread operator (...) is needed to correctly divide surrogate unicode pairs
// as split() or array accessor [] will not work.
const dataFruits = [...`🍇🍈🍉🍊🍋🍌🍍🥭🍎🍏🍐🍑🍒🍓🫐🥝🍅🫒🥥`]

/**
 * Generate an integer bound random number [min, max)
 */
export function intRandom(max: number, min: number = 0) {
    return Math.floor(Math.random() * (max - min)) + min
}

/**
 * Pick a random element from an array like object (array or string)
 * WARNING: It is not cryptographically secure
 */
export function pick<T>(data: ArrayLike<T>): T {
    return data[intRandom(data.length)]
}

/**
 * Pick many random elements from an array
 * WARNING: It is not cryptographically secure
 */
export function pickMany<T>(data: ArrayLike<T>, length: number): T[] {
    return new Array(length).fill(null).map(() => pick(data))
}

/**
 * Provide a random fruit emoji
 */
export function fruit() {
    return pick(dataFruits)
}

/**
 * Provide a random string of fruit emojis
 */
export function fruitSalad(length?: number) {
    length = length ?? intRandom(10, 1)
    return pickMany(dataFruits, length).join('')
}
