function repeatString(str, repeat) {
  return repeat > 0
    ? Array(repeat)
        .fill(str)
        .join('')
    : '';
}
