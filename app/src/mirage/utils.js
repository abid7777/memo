/* eslint-disable import/no-extraneous-dependencies */

import { Response } from 'miragejs';
import { faker } from '@faker-js/faker';

export const createUser = (userID) => ({
  _id: userID || faker.random.alphaNumeric(12),
  name: faker.name.findName(),
  avatar: faker.image.avatar(),
  createdAt: faker.date.past(),
  updatedAt: faker.date.past(),
});

export const createPost = (postID) => ({
  _id: postID || faker.random.alphaNumeric(12),
  title: faker.lorem.words(1 + Math.floor(Math.random() * 6)),
  desc: faker.lorem.sentences(),
  image: `${faker.image.cats()}?random=${Math.round(Math.random() * 1000)}`,
  likesCount: faker.random.numeric(3 + Math.floor(Math.random() * 5), { bannedDigits: ['0'] }),
  commentsCount: faker.random.numeric(1 + Math.floor(Math.random() * 3), { bannedDigits: ['0'] }),
  likedByMe: Boolean(Math.random() > 0.5),
  createdAt: faker.date.past(),
  updatedAt: faker.date.past(),
});

export const createComment = () => ({
  _id: faker.random.alphaNumeric(12),
  body: faker.lorem.sentences(),
  createdAt: faker.date.past(),
  updatedAt: faker.date.past(),
});

export const createList = (count, fn) => {
  if (typeof fn !== 'function') { return []; }

  const res = [];

  for (let i = 0; i < count; i += 1) {
    res.push(fn());
  }

  return res;
};

export const getRandomErrorResponse = () => (Math.random() > 0.5
  ? new Response(500, {}, { errors: ['internal server error'] })
  : new Response(400, {}, { errors: ['invalid request'] }));
