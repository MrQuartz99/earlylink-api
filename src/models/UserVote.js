const { model, Schema}  = require('mongoose');

const schema = new Schema({
    id: { type: Number, required: true  , unique: true },
    userId: { type: String, required: true   },
    guildId: { type: String, required: true  },
    postId: { type: Number, required: false  },
    post: { type: Object, required: false  },
    voteValue: { type: Number, required: true  },
    upvoted : { type: Boolean, required: false  },
    downvoted : { type: Boolean, required: false  },
    createdAt: { type: Date },
})

module.exports = model(
    'UserVotes' ,
    schema
);