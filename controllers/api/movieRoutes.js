const router = require('express').Router();
const { Movie } = require('../../models');

router.get('/', (req, res) => {
  Movie.findAll(
    {
      where: {
        user_id: req.body.user_id
      }
    }
  ).then(data => res.json(data)).catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  Movie.findOne(
    {
      where: {
        id: req.params.id
      }
    }
  ).then(data => res.json(data)).catch(err => res.status(500).json(err));
});

router.post('/', async (req, res) => {
  try{
    const newMovie = await Movie.create({
      ...req.body,
      user_id: req.session.user_id
    })
    res.status(200).json(newMovie);
  } catch (err) {res.status(400).json(err)}
//NEED SOMETHING LIKE "if movie exists... don't add"
//send json => { “title”:”TITLE”, “release_date”: “RELEASE DATE”, “poster_path”: “POSTER_PATH”, "user_id": "USER_ID" } //
/*   Movie.create(req.body).then(data => res.json(data)).catch(err => res.status(500).json(err)); */
});

router.put('/:id', (req, res) => {
  Movie.update(
    {
      where: {
        id: req.params.id
      }
    }
  ).then(data => res.json(data)).catch(err => res.status(500).json(err));
});

router.delete('/', (req, res) => {
  Movie.destroy(
    {
      where: {
        title: req.body.title
        //user_id: req.body.user_id
      }
    }).then(data => res.json(data)).catch(err => res.status(500).json(err));
});

module.exports = router;