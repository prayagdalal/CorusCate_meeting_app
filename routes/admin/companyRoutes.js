/**
 * companyRoutes.js
 * @description :: CRUD API routes for company
 */

const express = require('express');
const router = express.Router();
const companyController = require('../../controller/admin/companyController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/company/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,companyController.addCompany);
router.route('/admin/company/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,companyController.findAllCompany);
router.route('/admin/company/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,companyController.getCompanyCount);
router.route('/admin/company/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,companyController.getCompanyByAggregate);
router.route('/admin/company/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,companyController.softDeleteManyCompany);
router.route('/admin/company/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,companyController.bulkInsertCompany);
router.route('/admin/company/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,companyController.bulkUpdateCompany);
router.route('/admin/company/deleteMany').post(auth(...[ 'deleteManyByAdminInAdminPlatform' ]),checkRolePermission,companyController.deleteManyCompany);
router.route('/admin/company/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,companyController.softDeleteCompany);
router.route('/admin/company/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,companyController.partialUpdateCompany);
router.route('/admin/company/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,companyController.updateCompany);    
router.route('/admin/company/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,companyController.getCompany);
router.route('/admin/company/:id').post(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,companyController.getCompany);
router.route('/admin/company/delete/:id').delete(auth(...[ 'deleteByAdminInAdminPlatform' ]),checkRolePermission,companyController.deleteCompany);

module.exports = router;
