const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    path: "/signup",
    pageTitle: "Signup",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.redirect("/login");
      }

      console.log("User found:", user ? user.email : "none");

      bcrypt
        .compare(password, user.password)
        .then((doMatch) => {
          if (doMatch) {
            console.log("Password match:", doMatch);
            req.session.isLoggedIn = true;

            req.session.user = {
              _id: user._id.toString(),
              email: user.email,
              cart: user.cart,
            };
            req.session.save((err) => {
              console.log("Session save error:", err);
              return res.redirect("/");
            });
          } else {
            return res.redirect("/login");
          }
        })
        .catch((err) => {
          console.log(`Error in matching passwords`, err);
          res.redirect("/");
        });
    })
    .catch((err) => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const confirmPassword = req.body.confirmPassword;

  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        return res.redirect("/signup");
      }
      return bcrypt
        .hash(req.body.password, 12)
        .then((hashedPassword) => {
          const user = new User({
            email: email,
            password: hashedPassword,
            cart: { items: [] },
          });
          return user.save();
        })
        .then(() => {
          return res.redirect("/login");
        });
    })
    .catch((err) => {
      console.log(`Error in signup`, err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
