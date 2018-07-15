/*
  This is so we don't have to try / catch every route

  Idea from here: https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
*/

const asyncHandler = fn => {
  return function asyncWrapper (req, res, next, ...args) {
    const route = fn(req, res, next, ...args);
    return Promise.resolve(route).catch(next);
  }
}

export default asyncHandler;
