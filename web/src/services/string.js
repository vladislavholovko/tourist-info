function upperFirst(value) {
  if (value.length >= 1) {
    return `${value[0].toUpperCase()}${value.substring(1)}`;
  }

  return value;
}

export default {
  upperFirst: upperFirst
}
