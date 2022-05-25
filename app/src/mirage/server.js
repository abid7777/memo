/* eslint-disable import/no-extraneous-dependencies */

import { createServer } from 'miragejs';
import { faker } from '@faker-js/faker';

export default function server() {
  createServer({
    routes() {
      this.post('/api/v1/user', () => ({
        name: faker.name.findName(),
      }));
    },
  });
}
