function clone(obj) {
  if (null == obj || "object" !== typeof obj) return obj;
  var copy = new obj.constructor();
  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
  }
  return copy;
}

export default { clone };
