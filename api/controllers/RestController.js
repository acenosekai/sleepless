var RestController = {
    //handling login logout register
    callback: function(req, res) {
        function tryAgain(err) {
            res.json({
                errors: err
            });
        }

        passport.callback(req, res, function(err, user) {
            if (err) {
                return tryAgain();
            }

            req.login(user, function(err) {
                if (err) {
                    return tryAgain();
                }

                // Upon successful login, send the user to the homepage were req.user
                // will available.
                res.json({
                    errors: err,
                    user: user
                });
            });
        });
    },
    logout: function(req, res) {
        req.logout();
        res.json({
            success: true
        });
    },
    session: function(req, res) {
        res.json({
             session: req.session
        });
    }

}

module.exports = RestController;