/**
 * returns a copy of the object without specific props
 * @param {object} obj to remove prop from
 * @param {string} propToRemove 
 * @returns {object}
 */
export const withoutProps = (obj, ...omittedProps) => {
    const result = {};
    const omitSet = new Set(omittedProps);
    Object.keys(obj).forEach(key => {
        if (!omitSet.has(key)) result[key] = obj[key];
    });
    return result;
};
