const errorResponse = (err, req, res, next) => {
    console.error(err)
    res.status(500).json({ success: false, message: '뭔가 에러가 발생했어요.' })
}

module.exports = errorResponse
