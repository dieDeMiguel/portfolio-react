const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(
    new LocalStrategy((username, password, done) => {
        if (username !== "admin" || password !== "admin") {
            done({ message: "wrong credentials" });
            return;
        }
        done(null, {
            username: "admin",
            id: 1,
        });
    })
);

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

function ensureAPIAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.sendStatus(401);
}

module.exports = { ensureAuthenticated, ensureAPIAuthenticated, passport };
