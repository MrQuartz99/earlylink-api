
const express = require('express');
const cors = require('cors');
const Post = require('./models/Post.js');
const guildConfig = require('./models/GuildConfiguration.js');
const Stats = require('./models/Stats.js');

const app = express();
app.use(cors());

app.get(`/api/votes`, async (req, res) => {
    
    if(req.query.key !== process.env.API_KEY) return res.status(401).json({error: "Invalid API Key"});
    let projects = await Post.find({});
    projects = projects.filter(p => p.votes.length > 0);
    const top = [];
    for (const project of projects) {
        top.push({
            id: project.id,
            projectName: project.projectName,
            projectDescription: project.projectDescription,
            projectKeywords : project.projectKeywords,
            projectImageUrl : project.projectImageUrl,
            projectDiscordUrl : project.projectDiscordUrl,
            projectTwitterUrl : project.projectTwitterUrl,
            projectInsights : project.projectInsights,
            projectWebsiteUrl : project.projectWebsiteUrl,
            launched: project.launched,
            projectLogoUrl : project.projectLogoUrl,
            projectValue: project.votes.map((vote) => vote.voteValue).reduce((a, b) => a + b, 0),
            downvotes: project.downvotes,
            upvotes: project.upvotes,
            type: project.type,
            votes : project.votes,
            createdAt: project.createdAt,
        });
    }
    top.sort((a, b) => b.projectValue - a.projectValue);

    res.json(top);

});
app.get(`/api/stats`, async (req, res) => {
    if(req.query.key !== process.env.API_KEY) return res.status(401).json({error: "Invalid API Key"});
    let stats = await Stats.findOne({ clientId: process.env.CLIENT_ID });
    let body = {
        serverCount: stats.guilds,
        userCount: stats.users,

    }
    res.json(body);
     


})


app.get('/api/daos', async (req, res) => {
    if(req.query.key !== process.env.API_KEY) return res.status(401).json({error: "Invalid API Key"});
    let stats = await Stats.findOne({ clientId: process.env.CLIENT_ID });
    res.json(stats.guildsData);
    
  })
// Run the server!
app.listen(3000)