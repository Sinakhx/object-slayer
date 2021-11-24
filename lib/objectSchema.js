const getType = (item) => Object.prototype.toString.call(item).split(" ")[1].slice(0, -1);

const sanitizeSchema = (schema) => {
    const result = {};
    for (const key in schema) {
        const value = schema[key];
        if (getType(value) === "Object" && "<ArrayOf>" in value) {
            const val = value["<ArrayOf>"];
            result[key] = typeof val === "string" ? `Array<${val}>` : [val];
        }
        else {
            result[key] = value;
        }
    }
    return result;
};

/**
 * returns the types-schema of the given object (or json)
 * considering inner arrays have the elemets of the same schema
 * @param {object} object to extract schema from
 * @returns {object} of the same structure with values replaced by their corresponding types
 */
export const objectSchema = (object) => {
    const result = {};
    for (const key in object) {
        const value = object[key];
        const type = getType(value);
        if (type === "Object") {
            result[key] = objectSchema(value);
        }
        else if (type === "Array") {
            result[key] = objectSchema({ "<ArrayOf>": value[value.length - 1] });
        }
        else {
            result[key] = type;
        }
    }
    return sanitizeSchema(result);
};
