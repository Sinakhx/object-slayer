export const convertObjectToArray = (obj) => {
    const res = [];
    for (const key in obj) {
        res[key] = obj[key];
    }
    return res;
};
