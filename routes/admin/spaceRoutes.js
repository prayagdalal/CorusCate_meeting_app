/**
 * spaceRoutes.js
 * @description :: CRUD API routes for space
 */

const express = require('express');
const router = express.Router();
const spaceController = require('../../controller/admin/spaceController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/space/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,spaceController.addSpace);
router.route('/admin/space/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,spaceController.findAllSpace);
router.route('/admin/space/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,spaceController.getSpaceCount);
router.route('/admin/space/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,spaceController.getSpaceByAggregate);
router.route('/admin/space/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,spaceController.softDeleteManySpace);
router.route('/admin/space/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,spaceController.bulkInsertSpace);
router.route('/admin/space/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,spaceController.bulkUpdateSpace);
router.route('/admin/space/deleteMany').post(auth(...[ 'deleteManyByAdminInAdminPlatform' ]),checkRolePermission,spaceController.deleteManySpace);
router.route('/admin/space/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,spaceController.softDeleteSpace);
router.route('/admin/space/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,spaceController.partialUpdateSpace);
router.route('/admin/space/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,spaceController.updateSpace);    
router.route('/admin/space/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,spaceController.getSpace);
router.route('/admin/space/:id').post(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,spaceController.getSpace);
router.route('/admin/space/delete/:id').delete(auth(...[ 'deleteByAdminInAdminPlatform' ]),checkRolePermission,spaceController.deleteSpace);

module.exports = router;
