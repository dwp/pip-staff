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

router.post('/v11/reclaims/no-record/create-record', (req, res, next) => {
        res.redirect('/v11/reclaims/no-record/claimant-record');
    });

router.post('/v11/reclaims/no-record/pip-service-choice', (req, res, next) => {
        const serviceChoice = req.session.data['pip-service-choice'];
        if (serviceChoice == 'Old') {
            res.redirect('/v11/reclaims/no-record/create-record');
        } else {
            res.redirect('/v11/reclaims/no-record/create-record');
        }
    });
//No record routes end*************************************************************************

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
//No record routes end*************************************************************************

//Option 1 start*************************************************************************
router.post('/v11/reclaims/option-one/email-confirmation', (req, res, next) => {
        res.redirect('/v11/reclaims/option-one/claimant-search');
    });

router.post('/v11/reclaims/option-one/email-confirmation-resend', (req, res, next) => {
        res.redirect('/v11/reclaims/option-one/claimant-search');
    });

router.post('/v11/reclaims/option-one/check-record', (req, res, next) => {
        res.redirect('/v11/reclaims/option-one/email-confirmation');
    });
router.post('/v11/reclaims/option-one/check-record-full', (req, res, next) => {
        res.redirect('/v11/reclaims/option-one/email-confirmation');
    });
router.post('/v11/reclaims/option-one/check-record-part', (req, res, next) => {
        res.redirect('/v11/reclaims/option-one/email-confirmation');
    });

router.post('/v11/reclaims/option-one/edit-record-check', (req, res, next) => {
        res.redirect('/v11/reclaims/option-one/check-record');
    });

router.post('/v11/reclaims/option-one/claimant-search', (req, res, next) => {
            res.redirect('/v11/reclaims/option-one/claimant-record');
        });

router.post('/v11/reclaims/option-one/claimant-record', (req, res, next) => {

            const resendChoice = req.session.data['action'];
            const nationalInsurance = req.session.data['national-insurance-number']

            if (resendChoice == 'resend') {
                res.redirect('/v11/reclaims/option-one/email-confirmation-resend');
            } else {
                res.redirect('/v11/reclaims/option-one/pip-service-choice');
            }
        });

router.post('/v11/reclaims/option-one/edit-record', (req, res, next) => {
            // const info = req.session.data['national-insurance'];
                const nationalInsurance = req.session.data['national-insurance-number']
                console.log('is-this-calling', req.session.data)

                res.redirect('/v11/reclaims/option-one/claimant-record');
        });

router.post('/v11/reclaims/option-one/pip-service-choice', (req, res, next) => {
  const pipChoice = req.session.data['pip-service-choice'];
  if (pipChoice === 'tactical') {
      res.redirect('/v11/reclaims/option-one/check-record-part');
  } else {
      res.redirect('/v11/reclaims/option-one/check-record-full');
  }
  });
//Option 1 end*************************************************************************

//Option 2 start*************************************************************************
router.post('/v11/reclaims/option-two/email-confirmation', (req, res, next) => {
        res.redirect('/v11/reclaims/option-two/claimant-search');
    });

router.post('/v11/reclaims/option-two/email-confirmation-resend', (req, res, next) => {
        res.redirect('/v11/reclaims/option-two/claimant-search');
    });

router.post('/v11/reclaims/option-two/check-record', (req, res, next) => {
        res.redirect('/v11/reclaims/option-two/email-confirmation');
    });

router.post('/v11/reclaims/option-two/check-record-full', (req, res, next) => {
        res.redirect('/v11/reclaims/option-two/email-confirmation');
    });
router.post('/v11/reclaims/option-two/check-record-part', (req, res, next) => {
        res.redirect('/v11/reclaims/option-two/email-confirmation');
    });

router.post('/v11/reclaims/option-two/edit-record-check', (req, res, next) => {
        res.redirect('/v11/reclaims/option-two/check-record');
    });

router.post('/v11/reclaims/option-two/claimant-search', (req, res, next) => {
            res.redirect('/v11/reclaims/option-two/claimant-record');
        });

router.post('/v11/reclaims/option-two/claimant-record', (req, res, next) => {

            const resendChoice = req.session.data['action'];
            const nationalInsurance = req.session.data['national-insurance-number']

            if (resendChoice == 'resend') {
                res.redirect('/v11/reclaims/option-two/email-confirmation-resend');
            } else {
                res.redirect('/v11/reclaims/option-two/pip-service-choice');
            }
        });

router.post('/v11/reclaims/option-two/edit-record', (req, res, next) => {
            // const info = req.session.data['national-insurance'];
                const nationalInsurance = req.session.data['national-insurance-number']
                console.log('is-this-calling', req.session.data)

                res.redirect('/v11/reclaims/option-two/claimant-record');
        });

router.post('/v11/reclaims/option-two/pip-service-choice', (req, res, next) => {
  const pipChoice = req.session.data['pip-service-choice'];
  if (pipChoice === 'tactical') {
      res.redirect('/v11/reclaims/option-two/check-record-part');
  } else {
      res.redirect('/v11/reclaims/option-two/check-record-full');
  }
});
//Option 2 end*************************************************************************

//Option 3 start*************************************************************************
router.post('/v11/reclaims/option-three/email-confirmation', (req, res, next) => {
        res.redirect('/v11/reclaims/option-three/claimant-search');
    });

router.post('/v11/reclaims/option-three/email-confirmation-resend', (req, res, next) => {
        res.redirect('/v11/reclaims/option-three/claimant-search');
    });

router.post('/v11/reclaims/option-three/check-record', (req, res, next) => {
        res.redirect('/v11/reclaims/option-three/email-confirmation');
    });
router.post('/v11/reclaims/option-three/check-record-full', (req, res, next) => {
        res.redirect('/v11/reclaims/option-three/email-confirmation');
    });
router.post('/v11/reclaims/option-three/check-record-part', (req, res, next) => {
        res.redirect('/v11/reclaims/option-three/email-confirmation');
    });

router.post('/v11/reclaims/option-three/edit-record-check', (req, res, next) => {
        res.redirect('/v11/reclaims/option-three/check-record');
    });

router.post('/v11/reclaims/option-three/claimant-search', (req, res, next) => {
            res.redirect('/v11/reclaims/option-three/claimant-record');
        });

router.post('/v11/reclaims/option-three/claimant-record', (req, res, next) => {

            const resendChoice = req.session.data['action'];
            const nationalInsurance = req.session.data['national-insurance-number']

            if (resendChoice == 'resend') {
                res.redirect('/v11/reclaims/option-three/email-confirmation-resend');
            } else {
                res.redirect('/v11/reclaims/option-three/pip-service-choice');
            }
        });

router.post('/v11/reclaims/option-three/edit-record', (req, res, next) => {
            // const info = req.session.data['national-insurance'];
                const nationalInsurance = req.session.data['national-insurance-number']
                console.log('is-this-calling', req.session.data)

                res.redirect('/v11/reclaims/option-three/claimant-record');
        });

router.post('/v11/reclaims/option-three/pip-service-choice', (req, res, next) => {
  const pipChoice = req.session.data['pip-service-choice'];
  if (pipChoice === 'tactical') {
      res.redirect('/v11/reclaims/option-three/check-record-part');
  } else {
      res.redirect('/v11/reclaims/option-three/check-record-full');
  }
});
//Option 3 end*************************************************************************

//Option 4 start*************************************************************************
router.post('/v11/reclaims/option-four/email-confirmation', (req, res, next) => {
        res.redirect('/v11/reclaims/option-four/claimant-search');
    });

router.post('/v11/reclaims/option-four/email-confirmation-resend', (req, res, next) => {
        res.redirect('/v11/reclaims/option-four/claimant-search');
    });

router.post('/v11/reclaims/option-four/check-record', (req, res, next) => {
        res.redirect('/v11/reclaims/option-four/email-confirmation');
    });
router.post('/v11/reclaims/option-four/check-record-full', (req, res, next) => {
        res.redirect('/v11/reclaims/option-four/email-confirmation');
    });
router.post('/v11/reclaims/option-four/check-record-part', (req, res, next) => {
        res.redirect('/v11/reclaims/option-four/email-confirmation');
    });

router.post('/v11/reclaims/option-four/edit-record-check', (req, res, next) => {
        res.redirect('/v11/reclaims/option-four/check-record');
    });

router.post('/v11/reclaims/option-four/claimant-search', (req, res, next) => {
            res.redirect('/v11/reclaims/option-four/claimant-record');
        });

router.post('/v11/reclaims/option-four/claimant-record', (req, res, next) => {

            const resendChoice = req.session.data['action'];
            const nationalInsurance = req.session.data['national-insurance-number']

            if (resendChoice == 'resend') {
                res.redirect('/v11/reclaims/option-four/email-confirmation-resend');
            } else {
                res.redirect('/v11/reclaims/option-four/pip-service-choice');
            }
        });

router.post('/v11/reclaims/option-four/edit-record', (req, res, next) => {
            // const info = req.session.data['national-insurance'];
                const nationalInsurance = req.session.data['national-insurance-number']
                console.log('is-this-calling', req.session.data)

                res.redirect('/v11/reclaims/option-four/claimant-record');
        });

router.post('/v11/reclaims/option-four/pip-service-choice', (req, res, next) => {
  const pipChoice = req.session.data['pip-service-choice'];
  if (pipChoice === 'tactical') {
      res.redirect('/v11/reclaims/option-four/check-record-part');
  } else {
      res.redirect('/v11/reclaims/option-four/check-record-full');
  }
});
//Option 4 end*************************************************************************

//Option 5 start*************************************************************************
router.post('/v11/reclaims/option-five/email-confirmation', (req, res, next) => {
        res.redirect('/v11/reclaims/option-five/claimant-search');
    });

router.post('/v11/reclaims/option-five/email-confirmation-resend', (req, res, next) => {
        res.redirect('/v11/reclaims/option-five/claimant-search');
    });

router.post('/v11/reclaims/option-five/check-record', (req, res, next) => {
        res.redirect('/v11/reclaims/option-five/email-confirmation');
    });
router.post('/v11/reclaims/option-five/check-record-full', (req, res, next) => {
        res.redirect('/v11/reclaims/option-five/email-confirmation');
    });
router.post('/v11/reclaims/option-five/check-record-part', (req, res, next) => {
        res.redirect('/v11/reclaims/option-five/email-confirmation');
    });

router.post('/v11/reclaims/option-five/edit-record-check', (req, res, next) => {
        res.redirect('/v11/reclaims/option-five/check-record');
    });

router.post('/v11/reclaims/option-five/claimant-search', (req, res, next) => {
            res.redirect('/v11/reclaims/option-five/claimant-record');
        });

router.post('/v11/reclaims/option-five/claimant-record', (req, res, next) => {

            const resendChoice = req.session.data['action'];
            const nationalInsurance = req.session.data['national-insurance-number']

            if (resendChoice == 'resend') {
                res.redirect('/v11/reclaims/option-five/email-confirmation-resend');
            } else {
                res.redirect('/v11/reclaims/option-five/pip-service-choice');
            }
        });

router.post('/v11/reclaims/option-five/edit-record', (req, res, next) => {
            // const info = req.session.data['national-insurance'];
                const nationalInsurance = req.session.data['national-insurance-number']
                console.log('is-this-calling', req.session.data)

                res.redirect('/v11/reclaims/option-five/claimant-record');
        });

router.post('/v11/reclaims/option-five/pip-service-choice', (req, res, next) => {
  const pipChoice = req.session.data['pip-service-choice'];
  if (pipChoice === 'tactical') {
      res.redirect('/v11/reclaims/option-five/check-record-part');
  } else {
      res.redirect('/v11/reclaims/option-five/check-record-full');
  }
});
//Option 5 end*************************************************************************

//Option 6 start*************************************************************************
router.post('/v11/reclaims/option-six/email-confirmation', (req, res, next) => {
        res.redirect('/v11/reclaims/option-six/claimant-search');
    });

router.post('/v11/reclaims/option-six/email-confirmation-resend', (req, res, next) => {
        res.redirect('/v11/reclaims/option-six/claimant-search');
    });

router.post('/v11/reclaims/option-six/check-record', (req, res, next) => {
        res.redirect('/v11/reclaims/option-six/email-confirmation');
    });
router.post('/v11/reclaims/option-six/check-record-full', (req, res, next) => {
        res.redirect('/v11/reclaims/option-six/email-confirmation');
    });
router.post('/v11/reclaims/option-six/check-record-part', (req, res, next) => {
        res.redirect('/v11/reclaims/option-six/email-confirmation');
    });

router.post('/v11/reclaims/option-six/edit-record-check', (req, res, next) => {
        res.redirect('/v11/reclaims/option-six/check-record');
    });

router.post('/v11/reclaims/option-six/edit-record-resend', (req, res, next) => {
        res.redirect('/v11/reclaims/option-six/check-record-resend');
    });

router.post('/v11/reclaims/option-six/claimant-search', (req, res, next) => {
            res.redirect('/v11/reclaims/option-six/claimant-record');
        });

router.post('/v11/reclaims/option-six/check-record-resend', (req, res, next) => {
            res.redirect('/v11/reclaims/option-six/email-confirmation-resend');
        });

router.post('/v11/reclaims/option-six/claimant-record', (req, res, next) => {

            const resendChoice = req.session.data['action'];
            const nationalInsurance = req.session.data['national-insurance-number']

            if (resendChoice == 'resend') {
                res.redirect('/v11/reclaims/option-six/check-record-resend');
            } else {
                res.redirect('/v11/reclaims/option-six/pip-service-choice');
            }
        });

router.post('/v11/reclaims/option-six/edit-record', (req, res, next) => {
            // const info = req.session.data['national-insurance'];
                const nationalInsurance = req.session.data['national-insurance-number']
                console.log('is-this-calling', req.session.data)

                res.redirect('/v11/reclaims/option-six/claimant-record');
        });

router.post('/v11/reclaims/option-six/pip-service-choice', (req, res, next) => {
  const pipChoice = req.session.data['pip-service-choice'];
  if (pipChoice === 'tactical') {
      res.redirect('/v11/reclaims/option-six/check-record-part');
  } else {
      res.redirect('/v11/reclaims/option-six/check-record-full');
  }
});
//Option 6 end*************************************************************************

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

module.exports = router
