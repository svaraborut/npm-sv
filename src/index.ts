const dataFruits = `🍇🍈🍉🍊🍋🍌🍍🥭🍎🍏🍐🍑🍒🍓🫐🥝🍅🫒🥥`

/**
 * Pick a random element from an array like object (array or string)
 * WARNING: It is not cryptographically secure
 */
export function pick<T>(data: ArrayLike<T>): T {
    const id = Math.min(Math.floor(Math.random() * data.length), data.length - 1)
    return data[id]
}

/**
 * Provide a random fruit emoji
 */
export function fruit() {
    return pick(dataFruits)
}
