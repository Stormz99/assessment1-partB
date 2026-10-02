function deepFreeze(obj) {
  //Get all properties of the object
  const properties = Object.getOwnPropertyNames(obj);

  //Recursively freeze any nested objects
  for (const property of properties) {
    const value = obj[property];

    if (value !== null && typeof value === "object") {
      deepFreeze(value);
    }
  }

  //Freeze the current object
  return Object.freeze(obj);
}
const config = deepFreeze({
  api: { baseUrl: "https://x.com", retries: 3 },
  debug: false,
});
config.api.baseUrl = "https://changed.com"; // should be ignored
config.debug = true; // should be ignored
console.log(config.api.baseUrl, config.debug); // "https://x.com" false
console.log(Object.isFrozen(config.api)); // true
