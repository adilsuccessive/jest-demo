function asyncFunction() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('data');
    }, 2000);
  });
}

module.exports = asyncFunction;
