/**
 * returns a copy of the object without specific props
 * @param {object} object to remove prop from
 * @param {string[]=} omittedProps 
 * @returns {object}
 */
export const objectWithoutProps = (object, ...omittedProps) => {
    const result = {};
    const omitSet = new Set(omittedProps);
    for (const key in object) {
        if (!omitSet.has(key)) result[key] = object[key];
    }
    return result;
};
