/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */

import {
  Factory, Model, Serializer, createServer, belongsTo, hasMany,
} from 'miragejs';
import { faker } from '@faker-js/faker';

import { commentFactory, userFactory, postFactory } from './factories';
import {
  createComment, createList, createPost, createUser, getRandomErrorResponse,
} from './utils';

const ERROR_PROBABILITY = 0.05;
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
          ...createUser(id),
          token: { id },
        };

        return users.create(user);
      });
      this.get('/post', () => this.schema.posts.all());
      this.get(
        'post/trending',
        () => (Math.random() > ERROR_PROBABILITY
          ? this.schema.posts.all().slice(0, 10)
          : getRandomErrorResponse()),
      );
      this.get('/post/:postID', ({ comments, posts, users }, req) => {
        const { postID } = req.params;
        const post = posts.findBy({ _id: postID }) || posts.create({
          ...createPost(postID),
          author: users.create(createUser()),
          comments: createList(
            5,
            () => comments.create({ ...createComment(), author: users.create(createUser()) }),
          ),
        });

        return Math.random() > ERROR_PROBABILITY ? post : getRandomErrorResponse();
      });
      this.get('/post/:postID/comments', (_, req) => {
        const { postID } = req.params;
        const post = this.schema.posts.findBy({ _id: postID });

        return post ? post.comments : [];
      });
      this.get('/post/related/:postID', ({ posts }) => (Math.random() > ERROR_PROBABILITY
        ? posts.all().slice(0, 10 + Math.floor(Math.random() * 10))
        : getRandomErrorResponse()));
    },
  });
}
