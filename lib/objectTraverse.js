import { obj1 } from "../utils/sampleObjects.js";
import { isExactlyObject } from "./isExactlyObject.js";
import { convertObjectToArray } from "./convertObjectToArray.js";

export const objectTraverse = (object, fn) => {
    const result = {};
    for (const key in object) {
        const value = object[key];
        const isObject = isExactlyObject(value);
        const isArray = Array.isArray(value);
        if (isObject || isArray) {
            result[key] = objectTraverse(value, fn);
            if (isArray) result[key] = convertObjectToArray(result[key])
        }
        else {
            result[key] = fn(value, key, object);
        }
    }
    return result;
};


//test
const o = objectTraverse(obj1, ((v, k, o) => v + 100));
console.log(JSON.stringify(o, null, 2))