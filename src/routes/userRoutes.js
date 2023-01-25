import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', loginRequired, userController.index);
// router.get('/show/:id?', userController.show);

router.get('/store/', userController.store); /* aqui deveria ser POST coloquei get para testar pois não tinha o insomnia */

router.get('/update/', loginRequired, userController.update); /* aqui deveria ser PUT coloquei get para testar pois não tinha o insomnia */

router.get('/delete/', loginRequired, userController.delete); /* aqui deveria ser DELETE coloquei get para testar pois não tinha o insomnia */

export default router;

/*
Regras para arquivos controllers:

index ---> lista todos os usuários ---> GET
store/create ---> cria um novo usuário ---> POST
delete ---> apaga um usuário ---> DELETE
show ---> mostra um usuário ---> GET
update ---> atualiza um usuário ---> PATCH ou PUT

*/
