var RestController = {
    signup: function (req, res) {
         passport.callback(req, res, function (err, user) {
            res.json({
                errors:err,
                user:user
            });
         });
    }
}

module.exports = RestController;