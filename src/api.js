const express = require('express');
const cors = require('cors');
const Post = require('./models/Post.js');
const app = express();
app.use(cors());

app.get(`/api/votes`, async (req, res) => {

    let projects = await Post.find({});
    projects = projects.filter(project => project.votes.length > 0);
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
            votes : project.votes,
        });
    }
    top.sort((a, b) => b.projectValue - a.projectValue);

    res.json(top);

});


app.listen(process.env.PORT || 3000);