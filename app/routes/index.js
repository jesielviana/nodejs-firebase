import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.send('App Online!'));

const users = [{ nome: "João" }, { nome: "José" }, { nome: "Pedro" }];
router.use('/users', (req, res) => res.send(JSON.stringify(users)));

export default router;
