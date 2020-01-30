const Movies = require('./moviesModel.js');
const db = require('../data/dbConfig.js');

describe('movies model', function () {
    beforeEach(async () => {
        await db('movies').truncate();
    });

    describe('insert()', function () {
        it('should add the movie to the database', async function () {
            await Movies.insert({ name: 'The VVitch' });
            await Movies.insert({ name: 'The Lighthouse' });
            await Movies.insert({ name: 'Hereditary' });
            await Movies.insert({ name: 'Midsommar' });

            const movies = await db('movies');
            expect(movies).toHaveLength(4);
        });
    });
});