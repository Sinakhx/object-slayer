/**
 * @param {any} item as input
 * @return {boolean} true if input is exactly an object (not array or null)
 */
 export const isExactlyObject = (item) => typeof item === "object" && item !== null && !Array.isArray(item);
 