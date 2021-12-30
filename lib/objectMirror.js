/**
 * creates a bilingual dictionary form an object or json
 * @param {Record<string, string>} object as source
 * @returns {Record<string, string>} an object with same key-value pairs & value-key pairs as well
 */
export const objectMirror = (object) => {
    const result = {};
    for (const key in object) {
        result[key] = object[key];
        result[object[key]] = key;
    }
    return result;
};
