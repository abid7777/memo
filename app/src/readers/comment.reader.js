import _property from 'lodash/property';

export default {
  id: _property('_id'),
  authorName: _property('author.name'),
  authorAvatar: _property('author.avatar'),
  body: _property('body'),
  createdAt: _property('createdAt'),
  updatedAt: _property('updatedAt'),
};
