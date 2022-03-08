/**
 * index.js
 * @description :: index route file of device platform.
 */

const express =  require('express');
const router =  express.Router();
router.use('/device/auth',require('./auth'));
router.use(require('./tieupRoutes'));
router.use(require('./learnRoutes'));
router.use(require('./bulletinRoutes'));
router.use(require('./user_X_webinarRoutes'));
router.use(require('./meetingRoutes'));
router.use(require('./spaceRoutes'));
router.use(require('./companyRoutes'));
router.use(require('./userRoutes'));

module.exports = router;
