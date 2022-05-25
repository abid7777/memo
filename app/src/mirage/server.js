/* eslint-disable import/no-extraneous-dependencies */

import { Factory, Model, createServer } from 'miragejs';
import { faker } from '@faker-js/faker';

export default function create$erver() {
  createServer({
    models: {
      post: Model,
    },
    factories: {
      post: Factory.extend({
        _id: () => faker.random.alphaNumeric(5),
        title: () => faker.lorem.words(1 + Math.floor(Math.random() * 6)),
        desc: () => faker.lorem.sentences(),
        image: () => faker.image.cats(),
        likes: () => faker.random.numeric(3 + Math.floor(Math.random() * 5), { bannedDigits: ['0'] }),
        comments: () => faker.random.numeric(1 + Math.floor(Math.random() * 3), { bannedDigits: ['0'] }),
        likedByMe: () => Boolean(Math.random() > 0.5),
      }),
    },
    seeds(server) {
      server.createList('post', 30);
    },
    routes() {
      this.namespace = 'api/v1';

      this.post('/user', () => ({
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past(),
      }));
      this.get('/post', () => this.schema.posts.all());
    },
  });
}
