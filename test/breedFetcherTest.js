const {fetchBreedDescription} = require('../breedFetcher');
const {assert} = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, desc) => {
      assert.equal(error, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });
  it('returns error if invalid or non existent breed is passed in', (done) => {
    fetchBreedDescription('JajaGugu', (err, desc) => {
      assert.equal(desc, null);
      const expected = "Breed not found!";
      assert.equal(err, expected);
      done();
    })
  })
});