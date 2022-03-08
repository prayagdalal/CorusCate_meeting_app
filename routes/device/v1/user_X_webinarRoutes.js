/**
 * user_X_webinarRoutes.js
 * @description :: CRUD API routes for user_X_webinar
 */

const express = require('express');
const router = express.Router();
const user_X_webinarController = require('../../../controller/device/v1/user_X_webinarController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/user_x_webinar/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,user_X_webinarController.addUser_X_webinar);
router.route('/device/api/v1/user_x_webinar/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,user_X_webinarController.findAllUser_X_webinar);
router.route('/device/api/v1/user_x_webinar/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,user_X_webinarController.getUser_X_webinarCount);
router.route('/device/api/v1/user_x_webinar/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,user_X_webinarController.getUser_X_webinarByAggregate);
router.route('/device/api/v1/user_x_webinar/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,user_X_webinarController.softDeleteManyUser_X_webinar);
router.route('/device/api/v1/user_x_webinar/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,user_X_webinarController.bulkInsertUser_X_webinar);
router.route('/device/api/v1/user_x_webinar/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,user_X_webinarController.bulkUpdateUser_X_webinar);
router.route('/device/api/v1/user_x_webinar/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,user_X_webinarController.deleteManyUser_X_webinar);
router.route('/device/api/v1/user_x_webinar/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,user_X_webinarController.softDeleteUser_X_webinar);
router.route('/device/api/v1/user_x_webinar/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,user_X_webinarController.partialUpdateUser_X_webinar);
router.route('/device/api/v1/user_x_webinar/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,user_X_webinarController.updateUser_X_webinar);    
router.route('/device/api/v1/user_x_webinar/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,user_X_webinarController.getUser_X_webinar);
router.route('/device/api/v1/user_x_webinar/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,user_X_webinarController.getUser_X_webinar);
router.route('/device/api/v1/user_x_webinar/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,user_X_webinarController.deleteUser_X_webinar);

module.exports = router;
