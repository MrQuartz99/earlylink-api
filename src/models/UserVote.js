const { model, Schema}  = require('mongoose');

module.exports = model(
	'UserVotes' ,
	 new Schema({
        id: { type: Number, required: true  , unique: true },
        userId: { type: String, required: true   },
        guildId: { type: String, required: true  },
        postId: { type: Number, required: false  },
        post: { type: Object, required: true  },
        voteValue: { type: Number, required: true  },
        createdAt: { type: Date },
        
    })
);
