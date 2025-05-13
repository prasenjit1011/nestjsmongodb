export function logger(req, res, next) {
    console.log(`Logger Middleware : Method : ${req.method}, Url :  ${req.originalUrl}`);
    next();
}
  