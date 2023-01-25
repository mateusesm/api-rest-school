import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const router = new Router();

router.get('/', tokenController.store); /* aqui deveria ser POST coloquei get para testar pois não tinha o insomnia */

export default router;
