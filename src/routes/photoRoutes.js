import { Router } from 'express';
import multer from 'multer';
import photoController from '../controllers/PhotoController';
import loginRequired from '../middlewares/loginRequired';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', loginRequired, upload.single('photo'), photoController.store);

export default router;
