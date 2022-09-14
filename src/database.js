const mongoose = require('mongoose');
const GuildConfig = require('./models/GuildConfiguration.js');
const Post = require('./models/Post.js');
const UserVote = require('./models/UserVote.js');
const PostMessage = require('./models/PostMessage.js');
const fs = require('fs');

module.exports = async (MongoURL) => {
    const mongoFiles =  fs.readdirSync('./src/mongoEvents').filter(file => file.endsWith('.js'));
    for (const file of mongoFiles) {
        const event = require(`.//mongoEvents/${file}`);
		if(event.once) {
			mongoose.connection.once(event.name, (...args) => event.execute(...args));
		} else {
			mongoose.connection.on(event.name, (...args) => event.execute(...args));
		}
    }
    mongoose.Promise = global.Promise;
     await mongoose.connect(MongoURL, {
        useUnifiedTopology: false,
		useNewUrlParser: true, 
    })
    return console.log(`Successfully Assigned MongoDB Models`);


     
}