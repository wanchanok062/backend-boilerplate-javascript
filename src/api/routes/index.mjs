import express from 'express';

import userRouters from './userRouters.mjs';
/* PLOP_INJECT_IMPORT_ROUTES */

const router = express.Router();

router.use('/user', userRouters);
/* PLOP_INJECT_ROUTES */

export default router;