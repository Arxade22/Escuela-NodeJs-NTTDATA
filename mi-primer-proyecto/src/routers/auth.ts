import { Router } from "express";
import { registerCtrl, loginCtrl } from '../controllers/auth';

const router = Router();
// http://localhost:3001/auth/register|login [POST]
router.post('/register', registerCtrl);
router.post('/login', loginCtrl);

export { router };
