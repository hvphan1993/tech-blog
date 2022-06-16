const { Comment } = require('../models')

const commentData = [
    {
        comment_text: 'oops this is not the food blog! oh well cowabunga!',
        user_id: 4,
        post_id: 1
    },
    {
        comment_text: 'this is boring can we smash something already?',
        user_id: 3,
        post_id: 4
    },
    {
        comment_text: 'ugh if only we had the tech needed to shut down the technodome.',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'this was a well put together article. the others could learn from this.',
        user_id: 1,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;