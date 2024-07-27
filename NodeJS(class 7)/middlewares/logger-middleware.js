var myLogger = (req, res, next) => {
    console.log("Middleware run successfully")
    next()
}

export default myLogger;