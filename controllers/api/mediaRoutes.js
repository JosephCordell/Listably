const router = require('express').Router();
const { Media, User } = require('../../models');

router.get('/', (req, res) => {
    Movie.findAll({
        where: {
            user_id: req.body.user_id,
        },
    })
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
    Movie.findOne({
        where: {
            id: req.params.id,
        },
    })
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err));
});

router.post('/', async (req, res) => {
    try {
        let userObj;
        if (!req.session.user_id) {
            res.status(401).end();
            return;
        }
        let user = await User.findByPk(req.session.user_id);
        if (!user.todo) {
            userObj = [req.body.id, req.body.todo];
        } else {
            userObj = JSON.parse([user.todo]);

            let found = false;

            for (let i = 0; i < userObj.length; i++) {
                if (userObj[i][0] === req.body.id) {
                  found = true;
                  if (userObj[i][1] === req.body.todo)   {                    
                    break;
                  } else {
                    userObj[i][1] = req.body.todo
                  }
                }
            }
            if (!found) {
                userObj.push([req.body.id, req.body.todo]);
            }
        }
        
        const stringUserObj = JSON.stringify(userObj)
        console.log(stringUserObj);

        user.todo = stringUserObj

        user = await user.save()

        const newMedia = await Media.create({
            ...req.body,
        });

        res.status(200).json(newMedia);
    } catch (err) {
        if (err.errors) {
            for (let i = 0; i < err.errors.length; i++) {
                if (err.errors[i].validatorKey === 'not_unique') {
                    res.status(200).json('Success!');
                    return;
                }
            }
        }
        res.status(400).json(err);
        console.log(err);
    }
});

router.put('/:id', (req, res) => {
    Movie.update({
        where: {
            id: req.params.id,
        },
    })
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err));
});

router.delete('/', (req, res) => {
    Movie.destroy({
        where: {
            title: req.body.title,
            //user_id: req.body.user_id
        },
    })
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err));
});

module.exports = router;
