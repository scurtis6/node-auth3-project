const router = require('express').Router();

const Users = require('./users-model');

router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.json(users)
    })
    .catch(err => res.send(err))
});

router.get('/dept', (req, res) => {
    console.log(req.user.department);
    const department = req.user.department;

    Users.findDept(department)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = router;