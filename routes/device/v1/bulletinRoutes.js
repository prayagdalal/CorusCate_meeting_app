/**
 * bulletinRoutes.js
 * @description :: CRUD API routes for bulletin
 */

const express = require('express');
const router = express.Router();
const bulletinController = require('../../../controller/device/v1/bulletinController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/bulletin/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,bulletinController.addBulletin);
router.route('/device/api/v1/bulletin/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,bulletinController.findAllBulletin);
router.route('/device/api/v1/bulletin/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,bulletinController.getBulletinCount);
router.route('/device/api/v1/bulletin/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,bulletinController.getBulletinByAggregate);
router.route('/device/api/v1/bulletin/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,bulletinController.softDeleteManyBulletin);
router.route('/device/api/v1/bulletin/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,bulletinController.bulkInsertBulletin);
router.route('/device/api/v1/bulletin/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,bulletinController.bulkUpdateBulletin);
router.route('/device/api/v1/bulletin/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,bulletinController.deleteManyBulletin);
router.route('/device/api/v1/bulletin/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,bulletinController.softDeleteBulletin);
router.route('/device/api/v1/bulletin/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,bulletinController.partialUpdateBulletin);
router.route('/device/api/v1/bulletin/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,bulletinController.updateBulletin);    
router.route('/device/api/v1/bulletin/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,bulletinController.getBulletin);
router.route('/device/api/v1/bulletin/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,bulletinController.getBulletin);
router.route('/device/api/v1/bulletin/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,bulletinController.deleteBulletin);

module.exports = router;
