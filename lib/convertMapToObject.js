import { isPrimitive } from "../utils/fp.js";

export const convertMapToObject = (map = new Map()) => {
    const result = {};
    const keys = [];
    const values = [];
    const mapKeys = map.keys();
    let key = mapKeys.next();
    while (!key.done) {
        keys.push(key.value);
        values.push(map.get(key.value));
        key = mapKeys.next();
    }
    let i;
    const len = keys.length;
    for (i = 0; i < len; i += 1) {
        const k = isPrimitive(keys[i]) ? keys[i] : JSON.stringify(keys[i]);
        result[k] = values[i];
    }
    return result;
};
