import express from 'express';

const router = express.Router();

const user = {
    username: 'habinezaSamuel',
    firstName: 'Samuel',
    secondName: 'Habineza',
    email: "email@test.com"
}

router.get('/api/users', (req, res)=>{
res.status(200).send(user)
})

export default router;