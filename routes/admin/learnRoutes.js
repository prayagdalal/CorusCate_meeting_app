/**
 * learnRoutes.js
 * @description :: CRUD API routes for learn
 */

const express = require('express');
const router = express.Router();
const learnController = require('../../controller/admin/learnController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/learn/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,learnController.addLearn);
router.route('/admin/learn/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,learnController.findAllLearn);
router.route('/admin/learn/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,learnController.getLearnCount);
router.route('/admin/learn/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,learnController.getLearnByAggregate);
router.route('/admin/learn/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,learnController.softDeleteManyLearn);
router.route('/admin/learn/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,learnController.bulkInsertLearn);
router.route('/admin/learn/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,learnController.bulkUpdateLearn);
router.route('/admin/learn/deleteMany').post(auth(...[ 'deleteManyByAdminInAdminPlatform' ]),checkRolePermission,learnController.deleteManyLearn);
router.route('/admin/learn/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,learnController.softDeleteLearn);
router.route('/admin/learn/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,learnController.partialUpdateLearn);
router.route('/admin/learn/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,learnController.updateLearn);    
router.route('/admin/learn/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,learnController.getLearn);
router.route('/admin/learn/:id').post(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,learnController.getLearn);
router.route('/admin/learn/delete/:id').delete(auth(...[ 'deleteByAdminInAdminPlatform' ]),checkRolePermission,learnController.deleteLearn);

module.exports = router;
