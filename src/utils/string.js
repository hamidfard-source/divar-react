function bSlah2Slash(str) {
  if (!str) return;
  const newStr = str.replace("\\", "/");
  return newStr;
}

export { bSlah2Slash };
