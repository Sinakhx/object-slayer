export const convertArrayToObject = (arr, { keys = "index" } = {}) => {
    if (Array.isArray(arr[0]) && arr[0].length === 2) {
        return Object.fromEntries(Object.entries(arr));
    }
    const setItemFactory = () => {
        if (keys === "index") return (obj, val, i) => obj[i] = val;
        if (keys === "value") return (obj, val) => obj[val] = val;
        if (typeof keys === "function") return (obj, val, i) => obj[keys(val, i, obj)] = val;
        if (Array.isArray(keys) && keys.length === arr.length) return (obj, val, i) => obj[keys[i]] = val;
    }
    const setItem = setItemFactory();
    return arr.reduce((obj, val, i) => {
        setItem(obj, val, i);
        return obj;
    }, {});
}
