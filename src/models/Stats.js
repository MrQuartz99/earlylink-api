const { model, Schema}  = require('mongoose');




module.exports = model(
	'Stats' ,
	 new Schema({
        
        clientId: { type: String, required: true  , unique: true },
        guildsData: { type: Array , default: [] },
        guilds: { type: Number , default: null },
        users: { type: Number , default: null },

       
    })
);
