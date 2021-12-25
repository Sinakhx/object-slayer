export const objectRemoveNullish = (obj) => Object.keys(obj).reduce((result, key) => ({ ...result, ...(obj[key] != null ? { [key]: obj[key] } : {}) }), {});
