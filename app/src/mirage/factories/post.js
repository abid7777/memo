/* eslint-disable import/no-extraneous-dependencies */

import { faker } from '@faker-js/faker';

export default {
  _id: () => faker.random.alphaNumeric(12),
  title: () => faker.lorem.words(1 + Math.floor(Math.random() * 6)),
  desc: () => faker.lorem.sentences(),
  image: () => `${faker.image.cats()}?random=${Math.round(Math.random() * 1000)}`,
  likesCount: () => faker.random.numeric(3 + Math.floor(Math.random() * 5), { bannedDigits: ['0'] }),
  commentsCount: () => faker.random.numeric(1 + Math.floor(Math.random() * 3), { bannedDigits: ['0'] }),
  likedByMe: () => Boolean(Math.random() > 0.5),
  createdAt: faker.date.past(),
  updatedAt: faker.date.past(),
  afterCreate(post, server) {
    const author = server.create('user');
    const comments = server.createList('comment', 5, 'withAuthor').map((comment) => {
      comment.update({ post });
      comment.save();

      return comment;
    });

    comments.push(server.create('comment', { author }));
    post.update({ author, comments });
    post.save();
  },
};
