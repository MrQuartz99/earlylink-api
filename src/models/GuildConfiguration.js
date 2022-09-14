const { model, Schema}  = require('mongoose');

module.exports = model(
	'GuildsData' ,
	 new Schema({
        
        guildId: { type: String, required: true  , unique: true },
        channelId: { type: String , default: null },
        roleId: { type: String , default: null },
        isVerifiedDAO: { type: Boolean, default: false },
        createdAt: { type: Date },
    })
);
