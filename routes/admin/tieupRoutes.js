/**
 * tieupRoutes.js
 * @description :: CRUD API routes for tieup
 */

const express = require('express');
const router = express.Router();
const tieupController = require('../../controller/admin/tieupController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/tieup/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,tieupController.addTieup);
router.route('/admin/tieup/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,tieupController.findAllTieup);
router.route('/admin/tieup/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,tieupController.getTieupCount);
router.route('/admin/tieup/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,tieupController.getTieupByAggregate);
router.route('/admin/tieup/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,tieupController.softDeleteManyTieup);
router.route('/admin/tieup/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,tieupController.bulkInsertTieup);
router.route('/admin/tieup/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,tieupController.bulkUpdateTieup);
router.route('/admin/tieup/deleteMany').post(auth(...[ 'deleteManyByAdminInAdminPlatform' ]),checkRolePermission,tieupController.deleteManyTieup);
router.route('/admin/tieup/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,tieupController.softDeleteTieup);
router.route('/admin/tieup/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,tieupController.partialUpdateTieup);
router.route('/admin/tieup/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,tieupController.updateTieup);    
router.route('/admin/tieup/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,tieupController.getTieup);
router.route('/admin/tieup/:id').post(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,tieupController.getTieup);
router.route('/admin/tieup/delete/:id').delete(auth(...[ 'deleteByAdminInAdminPlatform' ]),checkRolePermission,tieupController.deleteTieup);

module.exports = router;
