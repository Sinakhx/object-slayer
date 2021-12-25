export const getType = (item) => Object.prototype.toString.call(item).split(" ")[1].slice(0, -1);
export const getTypesInArray = (array) => [...array.reduce((res, value) => res.add(getType(value)), new Set())].join(" | ");
export const isPrimitive = (item) => Object(item) !== item;
