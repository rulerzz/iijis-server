const express = require('express');
const submissionController = require('../../controllers/submission.controller');

const router = express.Router();

router.post('/init', submissionController.init);
router.get('/incomplete/:id', submissionController.incomplete);
router.post('/uploaddocument', submissionController.document);
router.post('/profile', submissionController.profile);
router.post('/uploadimage', submissionController.uploadimage);
router.put('/update', submissionController.update);
router.post('/confirm', submissionController.confirm);
router.get('/list/:id/:offset', submissionController.getsubmissionsbyid);
router.get('/listall/:id', submissionController.getlist);
router.get('/file/:id', submissionController.file);
router.get('/allreleases', submissionController.releases);
router.post('/release', submissionController.release);
router.get('/current', submissionController.current);
router.get('/getimage/:id', submissionController.getImage);
router.get('/interviewee/:id', submissionController.getIntervieweeImage);
module.exports = router;
