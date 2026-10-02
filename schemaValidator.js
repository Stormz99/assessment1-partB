function validateSchema(obj, schema) {
  const errors = [];

  for (const [key, expectedType] of Object.entries(schema)) {
    //Check if the property exists
    if (!Object.hasOwn(obj, key)) {
      errors.push(`${key}: missing property`);
      continue;
    }
    //Check if the property has the expected type
    const actualType = typeof obj[key];
    if (actualType !== expectedType) {
      errors.push(`${key}: expected ${expectedType}, got ${actualType}`);
    }
  }
  return errors;
}

const schema = { name: "string", age: "number", isAdmin: "boolean" };
console.log(validateSchema({ name: "Ada", age: 21, isAdmin: false }, schema));
// []
console.log(validateSchema({ name: "Ada", age: "21" }, schema));
// ['age: expected number, got string', 'isAdmin: missing property']
