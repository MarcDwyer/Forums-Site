const passport = require('passport');
const GoogleStrat = require('passport-google-oauth20');
// const keys = require('./keys');
const User = require('../app/models/user-model');
const aws = require('aws-sdk');

let s3 = new aws.S3({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET
})


passport.serializeUser((user, done) => {
    done(null, user.id)
})
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})


passport.use(new GoogleStrat({
callbackURL: '/auth/google/redirect',
clientID: s3.clientID,
clientSecret: s3.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({
        googleId: profile.id
    }).then((currentUser) => { 
        if(currentUser) {
                done(null, currentUser)
        } else {
            new User({
                username: profile.displayName,
                googleId: profile.id
            }).save()
              .then((newUser) => {
                  done(null, newUser)
              })  
        }
    })
})
)