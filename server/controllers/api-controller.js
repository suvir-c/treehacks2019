const express = require('express');
const { decorateApp } = require('@awaitjs/express');

const makeApiController = db => {
  const router = decorateApp(express.Router());

  router.getAsync('/posts/:id', async (req, res) => {
    console.log(req.params.id);
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

  return router;
};

module.exports = makeApiController;
