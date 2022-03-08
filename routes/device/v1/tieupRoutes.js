/**
 * tieupRoutes.js
 * @description :: CRUD API routes for tieup
 */

const express = require('express');
const router = express.Router();
const tieupController = require('../../../controller/device/v1/tieupController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/tieup/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,tieupController.addTieup);
router.route('/device/api/v1/tieup/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,tieupController.findAllTieup);
router.route('/device/api/v1/tieup/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,tieupController.getTieupCount);
router.route('/device/api/v1/tieup/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,tieupController.getTieupByAggregate);
router.route('/device/api/v1/tieup/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,tieupController.softDeleteManyTieup);
router.route('/device/api/v1/tieup/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,tieupController.bulkInsertTieup);
router.route('/device/api/v1/tieup/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,tieupController.bulkUpdateTieup);
router.route('/device/api/v1/tieup/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,tieupController.deleteManyTieup);
router.route('/device/api/v1/tieup/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,tieupController.softDeleteTieup);
router.route('/device/api/v1/tieup/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,tieupController.partialUpdateTieup);
router.route('/device/api/v1/tieup/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,tieupController.updateTieup);    
router.route('/device/api/v1/tieup/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,tieupController.getTieup);
router.route('/device/api/v1/tieup/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,tieupController.getTieup);
router.route('/device/api/v1/tieup/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,tieupController.deleteTieup);

module.exports = router;
