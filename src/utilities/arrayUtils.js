import { objectUtils } from "utilities";

function copy(o) {
  var output, v, key;
  output = Array.isArray(o) ? [] : {};
  for (key in o) {
    v = o[key];
    output[key] = typeof v === "object" ? objectUtils.clone(v) : v;
  }
  return output;
}

export default { copy };
