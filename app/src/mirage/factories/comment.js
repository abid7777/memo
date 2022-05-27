/* eslint-disable import/no-extraneous-dependencies */

import { faker } from '@faker-js/faker';
import { trait } from 'miragejs';

export default {
  _id: () => faker.random.alphaNumeric(12),
  body: () => faker.lorem.sentences(),
  createdAt: faker.date.past(),
  updatedAt: faker.date.past(),
  withAuthor: trait({
    afterCreate(comment, server) {
      comment.update({ author: server.create('user') });
    },
  }),
};
