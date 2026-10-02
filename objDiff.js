function diffObjects(oldObj, newObj) {
  const result = {
    added: {},
    removed: {},
    changed: {},
  };

  //Get all unique top-level keys from both objects
  const allKeys = new Set([
    ...Object.keys(oldObj || {}),
    ...Object.keys(newObj || {}),
  ]);

  for (const key of allKeys) {
    const hasOld = Object.prototype.hasOwnProperty.call(oldObj, key);
    const hasNew = Object.prototype.hasOwnProperty.call(newObj, key);

    if (hasNew && !hasOld) {
      //key exists only in the new object
      result.added[key] = newObj[key];
    } else if (hasOld && !hasNew) {
      //key exist only in the old object
      result.removed[key] = oldObj[key];
    } else if (hasOld && hasNew && oldObj[key] !== newObj[key]) {
      //key exists in both objects but the value changed
      result.changed[key] = {
        from: oldObj[key],
        to: newObj[key],
      };
    }
  }
  return result;
}
console.log(
  diffObjects(
    { name: "Setemi", role: "Engineer", country: "Jamaica" },
    { name: "Setemi", role: "Senior Engineer", city: "Kingston" },
  ),
);
// { added: { city: 'Kingston' }, removed: { country: 'Jamaica' }, changed: { role: { from: 'Engineer', to: 'Senior Engineer' } } }
