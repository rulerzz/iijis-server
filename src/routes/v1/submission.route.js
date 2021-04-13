const multer = require('multer');
const path = require('path');
const express = require('express');
const submissionController = require('../../controllers/submission.controller');

const upload = multer({ dest: 'uploads/', storage: multer.memoryStorage() });

const router = express.Router();

router.post('/init', submissionController.init);
router.get('/incomplete/:id', submissionController.incomplete);
router.post('/document', upload.single('file'), submissionController.document);
router.post('/profile', upload.single('file'), submissionController.profile);
router.post('/uploadimage', upload.single('file'), submissionController.uploadimage);
router.put('/update', submissionController.update);
router.post('/confirm', submissionController.confirm);
router.get('/list/:id/:offset', submissionController.getsubmissionsbyid);
router.get('/listall/:id', submissionController.getlist);
router.get('/file/:id', submissionController.file);
router.get('/allreleases', submissionController.releases);
router.post('/release', upload.single('file'), submissionController.release);
router.get('/current', submissionController.current);
router.get('/getimage/:id', submissionController.getImage);
router.get('/interviewee/:id', submissionController.getIntervieweeImage);
router.post('/uploaddocument', upload.any(), function (req, res) {
  console.log(req.files[0]);
  console.log(req.body)
  submissionController.document(req, res);
});
module.exports = router;
