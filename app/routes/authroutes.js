const router = require('express').Router();
const passport = require('passport');
console.log('pp')
router.get('/login', (req, res) => {
    res.send('it worked')
});

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

router.get('/logout', (res, req) => {

})

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/');
})

module.exports = router;