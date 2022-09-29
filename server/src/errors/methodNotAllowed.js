export default function methodNotAllowed(req, res, next) {
  return next({
    status: 405,
    message: `${req.method} is not allowed on ${req.originalUrl}`,
  });
}
