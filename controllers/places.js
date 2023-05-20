//
const router = require('express').Router()

let places = [{
  name: 'Sabaidee Thai & Sushi Bar',
  city: 'concord',
  state: 'NC',
  cuisines: 'Thai, Pan-Asian, sushi',
  pic: '/images/thai.jpeg'
}, {
  name: 'Mac Tabby Cat Cafe',
  city: 'charlotte',
  state: 'NC',
  cuisines: 'Coffee, Bakery',
  pic: '/images/cat-cafe.jpeg'
}]

//GET /places
router.get('/', (req,res) => {

    res.render('places/index', { places })
})

router.get('/new', (req,res)=>{
    res.render('./new')
})
router.post('/',(req,res)=>{
  console.log(req.body)
  places.push(req.body)
  res.redirect('/places')
})

// router.get('/places/:id',(req,res)=>{
//     res.send()
// })

module.exports = router