const router = require('express').Router()
const db = require('../models/index')

router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.post('/', (req, res) => {
  
  db.Place.create(req.body)
  .then(() => {
    res.status(303).redirect('/places')
  })
  .catch(err => {
    console.log('err',err)
    res.render('error404')
  })
})

router.get('/new', (req, res) => {
  res.render('new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id).populate('comments')
  .then(place => {
    res.render('show', { place })
  })
  .catch(err => {
    console.log('err',err)
    res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
    res.status(303).redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    console.log('err', err)
    res.status(404).render('error404')
  })
})

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
    res.status(303).redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.status(404).render('error404')
  })
})

router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('editPage', { place })
  })
  .catch(err => {
    res.status(404).render('error404')
  })
})

router.post('/:id/rant', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    db.Comment.create(req.body)
    .then(comment => {
      place.comments.push(comment.id)
      place.save()
      .then(() => {
        res.redirect(`/places/${req.params.id}`)
      })
      .catch(err=>{
        console.log(err)
        res.status(404).render('error404')
      })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
  // req.body.rant = req.body.rant ? true : false
  // res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.rantId)
  .then(place => {
    res.status(303).redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    console.log('err', err)
    res.status(404).render('error404')
  })
})

module.exports = router