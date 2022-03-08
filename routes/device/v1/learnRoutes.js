/**
 * learnRoutes.js
 * @description :: CRUD API routes for learn
 */

const express = require('express');
const router = express.Router();
const learnController = require('../../../controller/device/v1/learnController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/learn/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,learnController.addLearn);
router.route('/device/api/v1/learn/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,learnController.findAllLearn);
router.route('/device/api/v1/learn/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,learnController.getLearnCount);
router.route('/device/api/v1/learn/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,learnController.getLearnByAggregate);
router.route('/device/api/v1/learn/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,learnController.softDeleteManyLearn);
router.route('/device/api/v1/learn/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,learnController.bulkInsertLearn);
router.route('/device/api/v1/learn/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,learnController.bulkUpdateLearn);
router.route('/device/api/v1/learn/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,learnController.deleteManyLearn);
router.route('/device/api/v1/learn/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,learnController.softDeleteLearn);
router.route('/device/api/v1/learn/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,learnController.partialUpdateLearn);
router.route('/device/api/v1/learn/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,learnController.updateLearn);    
router.route('/device/api/v1/learn/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,learnController.getLearn);
router.route('/device/api/v1/learn/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,learnController.getLearn);
router.route('/device/api/v1/learn/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,learnController.deleteLearn);

module.exports = router;
