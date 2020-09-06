import { Router } from 'express';

const router: Router = Router();

import { signin, signup, profile } from '../controllers/auth.controller';

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', profile);

export default router;
