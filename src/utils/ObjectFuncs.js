Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter(key => predicate(obj[key]))
    // eslint-disable-next-line no-return-assign,no-sequences
    .reduce((res, key) => (res[key] = obj[key], res), {})
