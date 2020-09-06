import { Router } from 'express';

const router: Router = Router();

import { signin, signup, profile } from '../controllers/auth.controller';

router.post('/singup', signup);
router.post('/signin', signin);
router.post('/profile', profile);

export default router;
