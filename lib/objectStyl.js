const falsyValues = new Set([null, undefined, false, NaN, -NaN, "null", "undefined", "false", "NaN", "-NaN"]);

// filters out falsy values from keys & values of an object
export const objectStyl = (styles = {}) => {
    return Object.keys(styles).reduce((result, key) => {
        if (falsyValues.has(key) || falsyValues.has(styles[key])) return result;
        return { ...result, [key]: styles[key] };
    }, {});
};
