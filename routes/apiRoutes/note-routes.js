const router = require('express').Router();
const { findById, createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

// get all notes
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.get('/notes/:id', (req, res) => {
    let result = findById(req.params.id, notes);
    res.json(result);
});

// create new Note
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    let result = deleteNote(req.params.id, notes);
    res.json(result);
});

module.exports = router;