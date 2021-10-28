import { isExactlyObject } from "./isExactlyObject.js";

/**
 * returns a copy of the given object with pre-defined defaults
 * @param {object} object of some key-value pairs
 * @param {object} defaults object for missing key-value pairs
 * @returns {object} of key-values of the main object wherever present & filled with defaults for missing key-values
 */
export const objectWithDefaults = (object, defaults) => {
    const result = {...object};
    Object.keys(defaults).forEach(key => {
        if (result[key] === undefined && defaults[key] !== undefined) result[key] = defaults[key];
        else if (isExactlyObject(defaults[key])){
            result[key] = objectWithDefaults(result[key], defaults[key]);
        };
    });
    return result;
};
