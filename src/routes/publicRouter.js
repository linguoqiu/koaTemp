import Router from 'koa-router';
import publicController from '../api/PublicController';

const router = new Router();

router.prefix('/api')
router.get('/getCaptcha', publicController.getCaptcha)

export default router
