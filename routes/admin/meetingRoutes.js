/**
 * meetingRoutes.js
 * @description :: CRUD API routes for meeting
 */

const express = require('express');
const router = express.Router();
const meetingController = require('../../controller/admin/meetingController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/meeting/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,meetingController.addMeeting);
router.route('/admin/meeting/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,meetingController.findAllMeeting);
router.route('/admin/meeting/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,meetingController.getMeetingCount);
router.route('/admin/meeting/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,meetingController.getMeetingByAggregate);
router.route('/admin/meeting/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,meetingController.softDeleteManyMeeting);
router.route('/admin/meeting/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,meetingController.bulkInsertMeeting);
router.route('/admin/meeting/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,meetingController.bulkUpdateMeeting);
router.route('/admin/meeting/deleteMany').post(auth(...[ 'deleteManyByAdminInAdminPlatform' ]),checkRolePermission,meetingController.deleteManyMeeting);
router.route('/admin/meeting/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,meetingController.softDeleteMeeting);
router.route('/admin/meeting/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,meetingController.partialUpdateMeeting);
router.route('/admin/meeting/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,meetingController.updateMeeting);    
router.route('/admin/meeting/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,meetingController.getMeeting);
router.route('/admin/meeting/:id').post(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,meetingController.getMeeting);
router.route('/admin/meeting/delete/:id').delete(auth(...[ 'deleteByAdminInAdminPlatform' ]),checkRolePermission,meetingController.deleteMeeting);

module.exports = router;
