/**
 * bulletinRoutes.js
 * @description :: CRUD API routes for bulletin
 */

const express = require('express');
const router = express.Router();
const bulletinController = require('../../controller/admin/bulletinController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/bulletin/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,bulletinController.addBulletin);
router.route('/admin/bulletin/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,bulletinController.findAllBulletin);
router.route('/admin/bulletin/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,bulletinController.getBulletinCount);
router.route('/admin/bulletin/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,bulletinController.getBulletinByAggregate);
router.route('/admin/bulletin/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,bulletinController.softDeleteManyBulletin);
router.route('/admin/bulletin/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,bulletinController.bulkInsertBulletin);
router.route('/admin/bulletin/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,bulletinController.bulkUpdateBulletin);
router.route('/admin/bulletin/deleteMany').post(auth(...[ 'deleteManyByAdminInAdminPlatform' ]),checkRolePermission,bulletinController.deleteManyBulletin);
router.route('/admin/bulletin/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,bulletinController.softDeleteBulletin);
router.route('/admin/bulletin/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,bulletinController.partialUpdateBulletin);
router.route('/admin/bulletin/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,bulletinController.updateBulletin);    
router.route('/admin/bulletin/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,bulletinController.getBulletin);
router.route('/admin/bulletin/:id').post(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,bulletinController.getBulletin);
router.route('/admin/bulletin/delete/:id').delete(auth(...[ 'deleteByAdminInAdminPlatform' ]),checkRolePermission,bulletinController.deleteBulletin);

module.exports = router;
