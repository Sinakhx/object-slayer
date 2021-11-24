/**
 * creates a bilingual dictionary form an object or json
 * @param {object} object as source
 * @returns {object} an object with same key-value pairs & value-key pairs as well
 */
export const objectDictionary = (object) => {
    const result = {};
    for (const key in object) {
        result[key] = object[key];
        result[object[key]] = key;
    }
    return result;
};
