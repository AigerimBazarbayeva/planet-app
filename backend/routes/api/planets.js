const { Router } = require('express')
const Planet = require('../../models/Planet')
const bodyParser = require('body-parser')

const router = Router()
const jsonParser = bodyParser.json()

router.get('/', jsonParser, async(req, res) => {
    try{
        const planets = await Planet.find()
        if(!planets) throw new Error('No planets')
        res.status(200).json(planets)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/distance/:id1/:id2', jsonParser, async(req, res) => {
    const {id1} = req.params
    const {id2} = req.params

    try {
        const response1 = await Planet.findById(id1, req.body)
        const response2 = await Planet.findById(id2, req.body)
        if(!response1) throw Error('Something went wrong')
        if(!response2) throw Error('Something went wrong')
        let distance = response1.distance - response2.distance
        if(distance < 0){
            distance *= -1
        }
        res.status(200).json({distance : distance})
    } catch(error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/', jsonParser, async(req, res) => {
    const newPlanet = new Planet(req.body)
    try{
        const planet = await newPlanet.save()
        if(!planet) throw new Error('Something went wrong saving the planet!')
        res.status(200).json(planet)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
})

router.put('/:id', jsonParser, async(req, res) => {
    const { id } = req.params

    try{
        const response = await Planet.findByIdAndUpdate(id, req.body)
        if(!response) throw Error('Something went wrong')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', jsonParser, async (req, res) => {
    const { id } = req.params
    try{
        const removed = await Planet.findByIdAndDelete(id)
        if(!removed) throw Error('Something went wrong')
        res.status(200).json(removed)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router