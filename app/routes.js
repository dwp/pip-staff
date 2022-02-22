const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// router.post('/v7/option_1/new-existing-user', (req, res, next) => {
//     res.redirect('/v7/option_1/pip-service-choice');
// });



// router.post('/v7/option_1/pip-service-choice', (req, res, next) => {
//     const pipService = req.session.data['pip-service'];
//     if (pipService === 'New') {
//         res.redirect('/v7/option_1/claimant-search');
//     } else {
//         res.redirect('/v7/option_1/claimant-search-2');
//     }
// });

// router.post('/v7/option_1/email-confirmation', (req, res, next) => {
//     res.redirect('/v7/option_1/new-existing-user');
// });

// router.post('/v7/option_1/email-confirmation', (req, res, next) => {
//     res.redirect('/v7/option_1/new-existing-user');
// });

// ROUTES V10 - OPTION-5

router.post('/v10/option_5/claimant-search', (req, res, next) => {
        res.redirect('/v10/option_5/pip-service-choice');
    });

router.post('/v10/option_5/pip-service-choice', (req, res, next) => {
    const serviceChoice = req.session.data['pip-service'];
    if (serviceChoice === 'Old') {
        res.redirect('/v10/option_5/create-record');
    } else {
        res.redirect('/v10/option_5/service-confirm');
    }
});

router.post('/v10/option_5/service-confirm', (req, res, next) => {
        const serviceConfirm = req.session.data['interruption'];
        if (serviceConfirm === 'yes') {
            res.redirect('/v10/option_5/pip-service-choice');
        } else {
            res.redirect('/v10/option_5/create-record');
        }
});

// ROUTES END

// ROUTES V10 - OPTION-6    

router.post('/v10/option_6/claimant-search', (req, res, next) => {
    res.redirect('/v10/option_6/pip-service-choice');
});

router.post('/v10/option_6/pip-service-choice', (req, res, next) => {
const serviceChoice = req.session.data['pip-service'];
if (serviceChoice === 'Old') {
    res.redirect('/v10/option_6/create-record');
} else {
    res.redirect('/v10/option_6/service-confirm');
}
});

router.post('/v10/option_6/service-confirm', (req, res, next) => {
    const serviceConfirm = req.session.data['interruption'];
    if (serviceConfirm === 'yes') {
        res.redirect('/v10/option_6/pip-service-choice');
    } else {
        res.redirect('/v10/option_6/create-record');
    }
});

// ROUTES END

// ROUTES V10 - OPTION-7

router.post('/v10/option_7/claimant-search', (req, res, next) => {
    res.redirect('/v10/option_7/pip-service-choice');
});

router.post('/v10/option_7/pip-service-choice', (req, res, next) => {
const serviceChoice = req.session.data['pip-service-7'];
if (serviceChoice === 'Old') {
    res.redirect('/v10/option_7/create-record');
} else {
    res.redirect('/v10/option_7/service-confirm');
}
});

router.post('/v10/option_7/service-confirm', (req, res, next) => {
    const serviceConfirm = req.session.data['interruption-7'];
    if (serviceConfirm === 'yes') {
        res.redirect('/v10/option_7/pip-service-choice');
    } else {
        res.redirect('/v10/option_7/create-record');
    }
});

//  ROUTES END

// ROUTES V10 - OPTTION-8

router.post('/v10/option_8/claimant-search', (req, res, next) => {
    res.redirect('/v10/option_8/pip-service-choice');
});

router.post('/v10/option_8/pip-service-choice', (req, res, next) => {
const serviceChoice = req.session.data['pip-service-8'];
if (serviceChoice === 'Old') {
    res.redirect('/v10/option_8/create-record');
} else {
    res.redirect('/v10/option_8/service-confirm');
}
});

router.post('/v10/option_8/service-confirm', (req, res, next) => {
    const serviceConfirm = req.session.data['interruption-8'];
    if (serviceConfirm === 'yes') {
        res.redirect('/v10/option_8/pip-service-choice');
    } else {
        res.redirect('/v10/option_8/create-record');
    }
});

// ROUTES END

// ROUTES V10 - OPTION-9

router.post('/v10/option_9/claimant-search', (req, res, next) => {
    res.redirect('/v10/option_9/pip-service-choice');
});

router.post('/v10/option_9/pip-service-choice', (req, res, next) => {
    res.redirect('/v10/option_9/create-record');
});

// router.post('/v10/option_9/pip-service-choice', (req, res, next) => {
// const serviceChoice = req.session.data['pip-service-9'];
// if (serviceChoice === 'yes') {
//     res.redirect('/v10/option_9/create-record');
// } else {
//     res.redirect('/v10/option_9/service-confirm');
// }
// });

router.post('/v10/option_9/service-confirm', (req, res, next) => {
    const serviceConfirm = req.session.data['interruption-9'];
    if (serviceConfirm === 'yes') {
        res.redirect('/v10/option_9/pip-service-choice');
    } else {
        res.redirect('/v10/option_9/create-record');
    }
});

// ROUTE END

module.exports = router
