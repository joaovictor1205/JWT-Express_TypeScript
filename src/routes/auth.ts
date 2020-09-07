import { Router } from 'express';

const router: Router = Router();

import { signin, signup, profile } from '../controllers/auth.controller';
import { TokenValidate } from '../utils/validateToken';

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', TokenValidate, profile);

export default router;
