/**
 * creates a copy of the object with inverted key-value pairs
 * @param {object} object to invert key-value pairs
 * @returns {object} with key-values inverted
 */
export const objectInvert = (object = {}) => {
    const result = {};
    for (const key in object) {
        result[object[key]] = key;
    }
    return result;
};
