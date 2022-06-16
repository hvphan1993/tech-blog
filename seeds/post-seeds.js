const { Post } = require('../models');

const postData = [
    {
        title: 'Pizza Hut voted best pizza in the city!',
        content: 'History was made yet again after residents tried out the latest deep dish pizza from Pizza Hut and voted it the "tastiest thing ever"!',
        user_id: 4
    },
    {
        title: 'Benefits of Meditation',
        content: 'There are many benefits to meditating including X, Y, and Z.',
        user_id: 1
    },
    {
        title: 'Aliens attacking through a portal?',
        content: 'City is under attack from dinosaur aliens appearing to come out of a portal near a large domed structure',
        user_id: 3
    },
    {
        title: "Theory of particle-matter transformigrification",
        content: 'Science science science science...',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;