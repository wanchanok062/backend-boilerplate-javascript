import express from 'express';

import usersRouters from './usersRouters.mjs';
/* PLOP_INJECT_IMPORT_ROUTES */

const router = express.Router();

router.use('/users', usersRouters);
/* PLOP_INJECT_ROUTES */

export default router;