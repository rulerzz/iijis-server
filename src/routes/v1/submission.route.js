const multer = require('multer');
const path = require('path');
const express = require('express');
const submissionController = require('../../controllers/submission.controller');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage: storage });

const upload2 = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/init', submissionController.init);
router.get('/incomplete/:id', submissionController.incomplete);
router.post('/document', upload.single('file'), submissionController.document);
router.post('/profile', upload2.single('file'), submissionController.profile);
router.post('/uploadimage', upload2.single('file'), submissionController.uploadimage);
router.put('/update', submissionController.update);
router.post('/confirm', submissionController.confirm);
router.get('/list/:id/:offset', submissionController.getsubmissionsbyid);
router.get('/listall/:id', submissionController.getlist);
router.get('/file/:id', submissionController.file);
router.get('/allreleases', submissionController.releases);
router.post('/release', upload2.single('file'), submissionController.release);
router.get('/current', submissionController.current);
router.get('/getimage/:id', submissionController.getImage);
router.get('/interviewee/:id', submissionController.getIntervieweeImage);
module.exports = router;
