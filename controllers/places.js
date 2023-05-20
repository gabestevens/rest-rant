//
const router = require('express').Router()
const places = require('../models/places.js')


//GET /places
router.get('/', (req,res) => {

    res.render('places/index', { places })
})

router.get('/new', (req,res)=> {
    res.render('./new')
})
router.post('/',(req,res)=> {
  if(!req.body.pic){
    //default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city){
    req.body.city = 'anytown'
  }
  if(!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

router.get('/:id', (req,res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }else if (!places[id]) {
    res.render('error404')
  }else {
    res.render('./show', { 
      place: places[id],
      id
    })
  }
})

router.get('/:id/edit',(req,res) => {
  let id = Number(req.params.id)
  res.render('./editPage', { 
      place: places[id],
      id
    })
})

router.put('/:id',(req,res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }else if (!places[id]) {
    res.render('error404')
  }else{
    if(!req.body.pic){
      //default image if one is not provided
      req.body.pic = places[id].pic
    }
    if (!req.body.city){
      req.body.city = 'anytown'
    }
    if(!req.body.state) {
      req.body.state = 'USA'
    }
    places[id] = req.body
    res.status(303).redirect(`/places/${id}`)
  }
})

router.delete('/:id', (req,res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }else if (!places[id]) {
    res.render('error404')
  }else{
    places.splice(id, 1)
    res.status(303).redirect('/places')
  }
})

module.exports = router