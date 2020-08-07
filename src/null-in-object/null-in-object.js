function nullInObject(object) {
  Object.keys(object).forEach(key => {
    if (!object[key]) {
      object[key] = null;
    }
  });

  return object;
}

module.exports = nullInObject;
