export const callFuncs = (index, funcs) => {
  if (index === funcs.length) {
    return;
  }
  const func = funcs[index][0];
  const timeout = funcs[index][1];
  setTimeout(() => {
    func();
    callFuncs(index + 1, funcs);
  }, timeout);
};
