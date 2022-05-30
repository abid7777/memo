/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */

import {
  Factory, Model, Response, Serializer, createServer, belongsTo, hasMany,
} from 'miragejs';
import { faker } from '@faker-js/faker';

import { commentFactory, userFactory, postFactory } from './factories';

const ApplicationSerializer = Serializer.extend();

export default function create$erver() {
  createServer({
    serializers: {
      application: ApplicationSerializer,
      post: ApplicationSerializer.extend({
        include: ['author'],
        embed: true,
      }),
      comment: ApplicationSerializer.extend({
        include: ['author'],
        embed: true,
      }),
    },
    models: {
      post: Model.extend({
        author: belongsTo('user'),
        comments: hasMany(),
      }),
      user: Model.extend({
        posts: hasMany(),
      }),
      comment: Model.extend({
        post: belongsTo(),
        author: belongsTo('user'),
      }),
    },
    factories: {
      comment: Factory.extend(commentFactory),
      post: Factory.extend(postFactory),
      user: Factory.extend(userFactory),
    },
    seeds(server) {
      server.createList('post', 30);
    },
    routes() {
      this.namespace = 'api/v1';

      this.post('/user', ({ users }) => {
        const id = faker.random.alphaNumeric(12);
        const user = {
          _id: id,
          name: faker.name.findName(),
          avatar: faker.image.avatar(),
          createdAt: faker.date.past(),
          updatedAt: faker.date.past(),
          token: { id },
        };

        return users.create(user);
      });
      this.get('/post', () => this.schema.posts.all());
      this.get(
        'post/trending',
        () => this.schema.posts.all().slice(0, 10)
        // this.schema.posts.all().slice(0, 10)
        // new Response(400, {}, { errors: ['invalid request'] })
        // this.schema.posts.all().slice(0, 10 + Math.floor(Math.random() * 10));
        ,
      );
      this.get('/post/:postID', ({ posts }, req) => {
        const { postID } = req.params;
        const post = posts.findOrCreateBy({ _id: postID });

        return post || new Response(404, {}, { errors: ['invalid request'] });

        // new Response(400, {}, { errors: ['invalid request'] });
        // posts.findBy({ _id: postID });
      });
      this.get('/post/:postID/comments', (_, req) => {
        const { postID } = req.params;
        const post = this.schema.posts.findBy({ _id: postID });

        return post ? post.comments : [];
      });
      this.get('/post/related/:postID', ({ posts }) => (Math.random() > 0.5
        ? posts.all().slice(0, 10 + Math.floor(Math.random() * 10))
        : new Response(404, {}, { errors: ['not found'] })));
    },
  });
}
