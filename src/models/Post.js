const { model, Schema}  = require('mongoose');

module.exports = model(
	'Posts' ,
	 new Schema({
        id: { type: Number, required: true  , unique: true },
        projectName: { type: String, required: true  },
        projectDescription: { type: String , default: null },
        projectInsights: { type: String , default: null },
        projectKeywords: { type: String , default: null },
        projectTwitterUrl: { type: String , default: null },
        projectDiscordUrl: { type: String , default: "no" },
        projectImageUrl: { type: String , default: null },
        projectWebsiteUrl: { type: String , default: null },
        projectLogoUrl: { type: String , default: null },
        upvotes: { type: Number, default: 0 },
        downvotes: { type: Number, default: 0 },
        votes: { type: Array , default: [] },
        createdAt: { type: Date },
        launched: { type: Boolean, default: false },
    })
);
