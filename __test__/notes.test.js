const fs = require('fs');
const { createNote, updateNote, findNote, deleteNote } = require('../lib/notes.js');
const notes = [];

jest.mock('fs');

test('creates an note object', () => {
  const note = createNote({ title: 'test 1', text: 'test text' }, notes);

  expect(note.title).toBe('test 1');
  expect(note.text).toBe('test text');
  expect(note.id).not.toBeNull;
});

test('find note by id', () => {
  const startingNotes = [
    {
      id: '3',
      title: 'test 3',
      text: 'test text 3'
    },
    {
      id: '4',
      title: 'test 4',
      species: 'test text 4'
    }
  ];

  const index = findNote(3, startingNotes);

  expect(index).toEqual(0);
});


test('delete note by id', () => {
  const notes = [
    {
      id: '3',
      title: 'test 3',
      text: 'test text 3'
    },
    {
      id: '4',
      title: 'test 4',
      species: 'test text 4'
    }
  ];

  const result = deleteNote(3, notes);

  expect(notes.length).toBe(1);

});

test('update note by id', () => {
  const notes = [
    {
      id: '3',
      title: 'test 3',
      text: 'test text 3'
    }
  ];

  const noteUpdate = {id: '3',
                      title: 'updated title',
                      text: 'updated text'};

  const result = updateNote(noteUpdate, notes);

  expect(notes[0].title).toBe('updated title');
  expect(notes[0].text).toBe('updated text');

});
