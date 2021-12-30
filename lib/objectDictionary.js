/**
 * creates a dictionary with multiple key-values form an object or json
 * @param {Record<string, string>} object as source
 * @returns {Record<string, string>} an object with same key-value pairs & value-key pairs as well
 */
export const objectDictionary = (object, delimiter = " | ") => {
    const result = {};
    for (const k in object) {
        const v = object[k];
        const keys = typeof v === "string" ? v.split(delimiter) : v;
        for (const key of keys) {
            result[key] = k;
        }
    }
    return result;
};

// example
const sampleDictSource = {
    "key1": "foo1 | bar1 | baz1",
    "key2": ["foo2", "bar2"],
    "key3": "baz3",
}

const sampleOutput = {
    "foo1": "key1",
    "bar1": "key1",
    "baz1": "key1",
    "foo2": "key2",
    "bar2": "key2",
    "baz3": "key3",
}
