import { Router } from "express";
import userController from "../controllers/UserController.js";

import loginRequired from "../middlewares/loginRequired.js";

const router = new Router();

// Rotas abaixo não deveriam existir
// router.get('/', userController.index); // Lista usuarios
// router.get('/:id', userController.show); // Lista usuário

// Rotas abaixo são reais
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos os usuarios -> GET
store/create -> cria um novo user -> POST
delete -> apaga um user -> DELETE
show -> mostra um user -> GET
update - > atualiza um user -> PATCH ou PUT
*/
