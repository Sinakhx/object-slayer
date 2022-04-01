import { getType, isPrimitive } from "../utils/fp";

const isShallowCopyOf = (obj = {}, target = {}) => {
    const objectEntries = Object.entries(obj);
    const targetEntries = Object.entries(target);
    if (objectEntries.length !== targetEntries.length) {
        return false;
    }
    for (const [key, value] of objectEntries) {
        const isPrimitiveValue = isPrimitive(value);
        if (isPrimitiveValue && target[key] !== value) {
            return false;
        }
        if (!isPrimitiveValue && (getType(value) !== getType(target[key]))) {
            return false;
        }
    }
    return true;
};
