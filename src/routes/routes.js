import combineRoutes from 'koa-combine-routers';
import userRoutes from './userRouter';
import publicRouter from './publicRouter';

const router = combineRoutes(
  userRoutes,
  publicRouter,
)

export default router
