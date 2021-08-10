const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/v7/option_1/new-existing-user', (req, res, next) => {
    res.redirect('/v7/option_1/pip-service-choice');
});



router.post('/v7/option_1/pip-service-choice', (req, res, next) => {
    const pipService = req.session.data['pip-service'];
    if (pipService === 'New') {
        res.redirect('/v7/option_1/claimant-search');
    } else {
        res.redirect('/v7/option_1/claimant-search-2');
    }
});


module.exports = router
