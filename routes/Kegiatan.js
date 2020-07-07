const router = require('express').Router()
const kegiatanController = require('../controller/Kegiatan')

router.post('/input', (req, res) => {
  kegiatanController.simpanKegiatan(req.body)
    .then((result) => res.json(result))
    .catch(err => res.json(err))
})

router.get('/tampil', (req, res) => {
  kegiatanController.tampilKegiatan()
  .then((result) => res.json(result))
  .catch(err => res.json(err))
})

router.put('/edit/:id', (req, res) => {
  kegiatanController.edit(req.body, req.params.id)
    .then((result) => res.json(result))
    .catch(err => res.json(err))
})

router.get('/tampilsingle/:id', (req, res) => {
  kegiatanController.tampilkanSatuData(req.params.id)
    .then((result) => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res) => {
  kegiatanController.delete(req.params.id)
    .then((result) => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router