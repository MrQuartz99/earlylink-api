const { model, Schema}  = require('mongoose');

module.exports = model(
	'PostMessages' ,
	 new Schema({
        
        messageId: { type: String, required: true  , unique: true },
        channelId: { type: String , default: null },
        guildId: { type: String , default: null },
        post: { type: Object , default: null },
        postId: { type: Number , default: null },
        createdAt: { type: Date },

       
    })
);
