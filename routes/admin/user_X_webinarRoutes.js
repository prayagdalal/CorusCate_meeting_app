/**
 * user_X_webinarRoutes.js
 * @description :: CRUD API routes for user_X_webinar
 */

const express = require('express');
const router = express.Router();
const user_X_webinarController = require('../../controller/admin/user_X_webinarController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/user_x_webinar/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,user_X_webinarController.addUser_X_webinar);
router.route('/admin/user_x_webinar/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,user_X_webinarController.findAllUser_X_webinar);
router.route('/admin/user_x_webinar/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,user_X_webinarController.getUser_X_webinarCount);
router.route('/admin/user_x_webinar/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,user_X_webinarController.getUser_X_webinarByAggregate);
router.route('/admin/user_x_webinar/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,user_X_webinarController.softDeleteManyUser_X_webinar);
router.route('/admin/user_x_webinar/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,user_X_webinarController.bulkInsertUser_X_webinar);
router.route('/admin/user_x_webinar/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,user_X_webinarController.bulkUpdateUser_X_webinar);
router.route('/admin/user_x_webinar/deleteMany').post(auth(...[ 'deleteManyByAdminInAdminPlatform' ]),checkRolePermission,user_X_webinarController.deleteManyUser_X_webinar);
router.route('/admin/user_x_webinar/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,user_X_webinarController.softDeleteUser_X_webinar);
router.route('/admin/user_x_webinar/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,user_X_webinarController.partialUpdateUser_X_webinar);
router.route('/admin/user_x_webinar/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,user_X_webinarController.updateUser_X_webinar);    
router.route('/admin/user_x_webinar/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,user_X_webinarController.getUser_X_webinar);
router.route('/admin/user_x_webinar/:id').post(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,user_X_webinarController.getUser_X_webinar);
router.route('/admin/user_x_webinar/delete/:id').delete(auth(...[ 'deleteByAdminInAdminPlatform' ]),checkRolePermission,user_X_webinarController.deleteUser_X_webinar);

module.exports = router;
