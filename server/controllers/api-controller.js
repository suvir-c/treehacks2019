const express = require('express');
const { decorateApp } = require('@awaitjs/express');

const makeApiController = db => {
  const router = decorateApp(express.Router());

  /**
   * Given the id, returns all the posts and subposts
   */
  router.getAsync('/posts/:id', async (req, res) => {
    // console.log(req.params.id);

    // grab all posts
    const posts = await db.find({
      userGroupId: req.params.id,
    });

    // grab each reply for each post
    posts.forEach(async (value, index) => {
      const replies = await db.find({
        postFriendlyId: value.friendlyId,
      });
      posts[index].replies = replies;
    });

    res.json(posts);
  });

  /**
   * Given the post id, returns all keywords > 2 occurances
   */
  router.getAsync('/analytics/:id', async (req, res) => {
    // console.log(req.params.id);
    // const blogPost = await db.findOne({ _id: req.params.id });
    const match = {
      $match: { friendlyId: req.params.id },
    };
    const channelLookup = {
      $lookup: {
        from: 'radiks-server-data',
        localField: 'userGroupId',
        foreignField: '_id',
        as: 'channel',
      },
    };
    const authorLookup = {
      $lookup: {
        from: 'radiks-server-data',
        localField: 'authorName',
        foreignField: '_id',
        as: 'author',
      },
    };
    const [channelPost] = await db
      .aggregate([match, channelLookup, authorLookup])
      .toArray();
    const [author] = channelPost.author;
    const [channel] = channelPost.channel;
    channelPost.author = author;
    channelPost.channel = channel;

    res.json(channelPost);
  });

  router.getAsync('/reports/:authorName', async (req, res) => {
    // console.log(req.params.id);

    const match = {
      $match: { authorName: req.params.authorName },
    };
    const [report] = await db.aggregate([match]).toArray();

    res.json(report);
  });

  router.getAsync('/reports', async (req, res) => {
    const [report] = await db.report.find();
    res.json(report);
  });

  return router;
};

module.exports = makeApiController;
