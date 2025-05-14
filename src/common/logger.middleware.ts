export function logger(req, res, next) {
    let dtd = new Date;
    console.log(`\nLogger Middleware : ${dtd.getHours()}:${dtd.getMinutes()}:${dtd.getSeconds()}`);
    console.log(`Method : ${req.method}, Url :  ${req.originalUrl}`);
    next();
}
  