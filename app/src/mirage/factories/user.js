/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */

import { faker } from '@faker-js/faker';
import { trait } from 'miragejs';

export default {
  _id: () => faker.random.alphaNumeric(12),
  name() { return faker.name.findName(); },
  avatar: faker.image.avatar(),
  createdAt: faker.date.past(),
  updatedAt: faker.date.past(),
  withToken: trait({
    afterCreate(user) {
      user.update({ token: { id: user._id } });
    },
  }),
};
