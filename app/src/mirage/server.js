/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */

import {
  Factory, Model, Serializer, createServer, belongsTo, hasMany, trait,
} from 'miragejs';
import { faker } from '@faker-js/faker';

const ApplicationSerializer = Serializer.extend();

export default function create$erver() {
  createServer({
    serializers: {
      application: ApplicationSerializer,
      post: ApplicationSerializer.extend({
        include: ['author', 'comments'],
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
      post: Factory.extend({
        _id: () => faker.random.alphaNumeric(5),
        title: () => faker.lorem.words(1 + Math.floor(Math.random() * 6)),
        desc: () => faker.lorem.sentences(),
        image: () => faker.image.cats(),
        likesCount: () => faker.random.numeric(3 + Math.floor(Math.random() * 5), { bannedDigits: ['0'] }),
        commentsCount: () => faker.random.numeric(1 + Math.floor(Math.random() * 3), { bannedDigits: ['0'] }),
        likedByMe: () => Boolean(Math.random() > 0.5),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past(),
        afterCreate(post, server) {
          const author = server.create('user');
          const comments = server.createList('comment', 54, 'withAuthor').map((comment) => {
            comment.update({ post });
            comment.save();

            return comment;
          });

          comments.push(server.create('comment', { author }));
          post.update({ author, comments });
          post.save();
        },
      }),
      user: Factory.extend({
        _id: () => faker.random.alphaNumeric(5),
        name() { return faker.name.findName(); },
        avatar: faker.image.avatar(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past(),
        withToken: trait({
          afterCreate(user) {
            user.update({ token: { id: user._id } });
          },
        }),
      }),
      comment: Factory.extend({
        _id: () => faker.random.alphaNumeric(5),
        body: () => faker.lorem.sentences(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past(),
        withAuthor: trait({
          afterCreate(comment, server) {
            comment.update({ author: server.create('user') });
          },
        }),
      }),
    },
    seeds(server) {
      server.createList('post', 30);
    },
    routes() {
      this.namespace = 'api/v1';

      this.post('/user', ({ users }) => {
        const id = faker.random.alphaNumeric(5);
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
      this.get('/post/:postID', ({ posts }, req) => {
        const { postID } = req.params;

        return posts.findBy({ _id: postID });
      });
    },
  });
}
