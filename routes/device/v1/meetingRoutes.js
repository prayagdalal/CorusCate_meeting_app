/**
 * meetingRoutes.js
 * @description :: CRUD API routes for meeting
 */

const express = require('express');
const router = express.Router();
const meetingController = require('../../../controller/device/v1/meetingController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/meeting/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,meetingController.addMeeting);
router.route('/device/api/v1/meeting/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,meetingController.findAllMeeting);
router.route('/device/api/v1/meeting/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,meetingController.getMeetingCount);
router.route('/device/api/v1/meeting/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,meetingController.getMeetingByAggregate);
router.route('/device/api/v1/meeting/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,meetingController.softDeleteManyMeeting);
router.route('/device/api/v1/meeting/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,meetingController.bulkInsertMeeting);
router.route('/device/api/v1/meeting/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,meetingController.bulkUpdateMeeting);
router.route('/device/api/v1/meeting/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,meetingController.deleteManyMeeting);
router.route('/device/api/v1/meeting/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,meetingController.softDeleteMeeting);
router.route('/device/api/v1/meeting/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,meetingController.partialUpdateMeeting);
router.route('/device/api/v1/meeting/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,meetingController.updateMeeting);    
router.route('/device/api/v1/meeting/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,meetingController.getMeeting);
router.route('/device/api/v1/meeting/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,meetingController.getMeeting);
router.route('/device/api/v1/meeting/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,meetingController.deleteMeeting);

module.exports = router;
