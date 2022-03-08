/**
 * spaceRoutes.js
 * @description :: CRUD API routes for space
 */

const express = require('express');
const router = express.Router();
const spaceController = require('../../../controller/device/v1/spaceController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/space/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,spaceController.addSpace);
router.route('/device/api/v1/space/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,spaceController.findAllSpace);
router.route('/device/api/v1/space/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,spaceController.getSpaceCount);
router.route('/device/api/v1/space/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,spaceController.getSpaceByAggregate);
router.route('/device/api/v1/space/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,spaceController.softDeleteManySpace);
router.route('/device/api/v1/space/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,spaceController.bulkInsertSpace);
router.route('/device/api/v1/space/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,spaceController.bulkUpdateSpace);
router.route('/device/api/v1/space/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,spaceController.deleteManySpace);
router.route('/device/api/v1/space/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,spaceController.softDeleteSpace);
router.route('/device/api/v1/space/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,spaceController.partialUpdateSpace);
router.route('/device/api/v1/space/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,spaceController.updateSpace);    
router.route('/device/api/v1/space/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,spaceController.getSpace);
router.route('/device/api/v1/space/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,spaceController.getSpace);
router.route('/device/api/v1/space/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,spaceController.deleteSpace);

module.exports = router;
