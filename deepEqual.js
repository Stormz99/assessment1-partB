function deepEqual(objA, objB) {
  if (objA === null || objB === null) {
    //confirmation if is null and treating
    return objA === objB;
  }
  if (typeof objA !== typeof objB) {
    return false;
  }
  if (typeof objA !== "object") {
    return objA === objB;
  }

  //object confirmation or Array
  if (Array.isArray(objA) || Array.isArray(objB)) {
    //Arrays
    if (String(objA) !== String(objB)) {
      return false;
    }
  } else {
    //object
    if (Object.keys(objA).length !== Object.keys(objB).length) {
      return false;
    }
    for (const key in objA) {
      if (!deepEqual(objA[key], objB[key])) {
        return false;
      }
    }
  }
  return true;
}
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); // false
console.log(typeof ({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));
