import Router from 'koa-router';
import userController from '../api/UserController';

const router = new Router();

router.prefix('/api');
router.post('/user', userController.getUserInfo);

export default router
