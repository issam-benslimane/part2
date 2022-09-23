export function deepClownArray(arr) {
  return arr.map((e) => {
    if (Array.isArray(e)) return deepClownArray(e);
    if (typeof e === "object") return deepClownObject(e);
    return e;
  });
}

export function deepClownObject(obj) {
  const result = {};
  for (let [key, val] of Object.entries(obj)) {
    if (Array.isArray(val)) result[key] = deepClownArray(val);
    else if (typeof val === "object") result[key] = deepClownObject(val);
    else result[key] = val;
  }
  return result;
}
