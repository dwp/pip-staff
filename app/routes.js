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

// Reclaims ROUTES
//No record routes start*************************************************************************
router.post('/v11/reclaims/no-record/claimant-search', (req, res, next) => {
    res.redirect('/v11/reclaims/no-record/pip-service-choice');
});

router.post('/v11/reclaims/no-record/claimant-record', (req, res, next) => {
    res.redirect('/v11/reclaims/no-record/email-confirmation');
});

router.post('/v11/reclaims/no-record/email-confirmation', (req, res, next) => {
    res.redirect('/v11/reclaims/no-record/claimant-search');
});

router.post('/v11/reclaims/no-record/create-record-part', (req, res, next) => {
    res.redirect('/v11/reclaims/no-record/claimant-record');
});

router.post('/v11/reclaims/no-record/create-record-full', (req, res, next) => {
    res.redirect('/v11/reclaims/no-record/claimant-record');
});

router.post('/v11/reclaims/no-record/pip-service-choice', (req, res, next) => {
    const serviceChoice = req.session.data['pip-service-choice'];
    if (serviceChoice == 'Old') {
        res.redirect('/v11/reclaims/no-record/create-record-part');
    } else {
        res.redirect('/v11/reclaims/no-record/create-record-full');
    }
});

//Record exists start*************************************************************************
router.post('/v11/reclaims/record-exists/email-confirmation', (req, res, next) => {
    res.redirect('/v11/reclaims/record-exists/claimant-search');
});

router.post('/v11/reclaims/record-exists/check-record', (req, res, next) => {
    res.redirect('/v11/reclaims/record-exists/email-confirmation');
});

router.post('/v11/reclaims/record-exists/edit-record-check', (req, res, next) => {
    res.redirect('/v11/reclaims/record-exists/check-record');
});

router.post('/v11/reclaims/record-exists/claimant-search', (req, res, next) => {
    res.redirect('/v11/reclaims/record-exists/claimant-record');
});

router.post('/v11/reclaims/record-exists/claimant-record', (req, res, next) => {

    const resendChoice = req.session.data['action'];
    const nationalInsurance = req.session.data['national-insurance-number']

    if (resendChoice == 'resend') {
        res.redirect('/v11/reclaims/record-exists/email-confirmation');
    } else {
        res.redirect('/v11/reclaims/record-exists/pip-service-choice');
    }
});

router.post('/v11/reclaims/record-exists/pip-service-choice', (req, res, next) => {
    res.redirect('/v11/reclaims/record-exists/check-record');
});

router.post('/v11/reclaims/record-exists/edit-record', (req, res, next) => {
    // const info = req.session.data['national-insurance'];
    const nationalInsurance = req.session.data['national-insurance-number']
    console.log('is-this-calling', req.session.data)

    res.redirect('/v11/reclaims/record-exists/claimant-record');
});

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

// ROUTES V10 - OPTION-10

router.post('/v10/option_10/claimant-search', (req, res, next) => {
    res.redirect('/v10/option_10/pip-service-choice');
});

router.post('/v10/option_10/pip-service-choice', (req, res, next) => {
    const serviceChoice = req.session.data['pip-service-10'];
    if (serviceChoice === 'yes') {
        res.redirect('/v10/option_10/create-record-part');
    } else {
        res.redirect('/v10/option_10/create-record-full');
    }
});

// ROUTE END

// ROUTES IT4

router.post('/reference_screens/post_mvp/it_4/new_claimant_journey/claimant-search', (req, res, next) => {
    res.redirect('/reference_screens/post_mvp/it_4/new_claimant_journey/pip-service-choice');
});

router.post('/reference_screens/post_mvp/it_4/new_claimant_journey/pip-service-choice', (req, res, next) => {
    const pipChoice = req.session.data['pip-service-it4'];
    if (pipChoice === 'tactical') {
        res.redirect('/reference_screens/post_mvp/it_4/new_claimant_journey/create-record-part');
    } else {
        res.redirect('/reference_screens/post_mvp/it_4/new_claimant_journey/create-record-full');
    }
});

// ROUTES END

// ROUTES V11 RECLAIMS //

// router.post('/v11/reclaims/no-record/pip-service-choice', (req, res, next) => {
//     const pipChoice1 = req.session.data[' pip-service-choice-reclaim-1'];
//     if (pipChoice1 === 'Old') {
//         res.redirect('/v11/reclaims/no-record/create-record-part');
//     } else {
//         res.redirect('/v11/reclaims/no-record//create-record-full');
//     }
//     });




// ROUTES END //

module.exports = router
