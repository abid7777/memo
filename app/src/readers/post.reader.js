import _property from 'lodash/property';

export default Object.freeze({
  id: _property('_id'),
  title: _property('title'),
  desc: _property('desc'),
  image: _property('image'),
  likes: _property('likes'),
  likedByMe: _property('likedByMe'),
  comments: _property('comments'),
});
