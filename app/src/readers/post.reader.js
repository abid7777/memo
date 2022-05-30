import _property from 'lodash/property';

export default Object.freeze({
  id: _property('_id'),
  title: _property('title'),
  desc: _property('desc'),
  image: _property('image'),
  likedByMe: _property('likedByMe'),
  commentsCount: _property('commentsCount'),
  likesCount: _property('likesCount'),
  createdAt: _property('createdAt'),
  updatedAt: _property('updatedAt'),
  authorName: _property('author.name'),
  authorAvatar: _property('author.avatar'),
});
