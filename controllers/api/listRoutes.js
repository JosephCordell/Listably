const router = require('express').Router();
const { List, Movie } = require('../../models');

router.get('/', (req, res) => {
  List.findAll(
    {
      where: {
        user_id: req.params.user_id
      },
      include: {
        model: Movie,
        attributes: ['title']
      }
    }).then(data => res.json(data)).catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
//send JSON - {"user_id":"USER_ID", "movie_id":"MOVIE_ID"}
  List.create(req.body).then(data => res.json(data)).catch(err => res.status(500).json(err));
});

// router.put()
// add another column for want to watch/watching/watched?
// differ

router.delete('/', (req, res) => {
  List.destroy(
    {
      where: {
        user_id: req.params.user_id,
        movie_id: req.params.movie_id
      }
    }
  ).then(data => res.json(data)).catch(err => res.status(500).json(err));
});


module.exports = router;