import { isExactlyObject } from "./isExactlyObject.js";

/**
 * returns a copy of the given object with pre-defined defaults
 * @param {object} object of some key-value pairs
 * @param {object} defaults object for missing key-value pairs
 * @returns {object} of key-values of the main object wherever present & filled with defaults for missing key-values
 */
export const objectWithDefaults = (object, defaults) => {
    const result = Object.assign({}, object);
    for (const key in defaults) {
        if (result[key] === undefined && defaults[key] !== undefined) result[key] = defaults[key];
        else if (isExactlyObject(defaults[key])) {
            result[key] = objectWithDefaults(result[key], defaults[key]);
        }
    }
    return result;
};

// //example:
// const obj = {
//     v1: 12,
//     v3: {
//         v4: 18,
//     },
// };

// const dflts = {
//     v1: 0,
//     v2: 1,
//     v3: {
//         v4: 2,
//         v5: {
//             v6: 3,
//         },
//     },
//     v7: {
//         v8: 4,
//     },
// };

// console.log(objectWithDefaults(obj, dflts));
