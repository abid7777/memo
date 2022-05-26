import _property from 'lodash/property';

export default {
  id: _property('_id'),
  name: _property('name'),
  avatar: _property('avatar'),
  createdAt: _property('createdAt'),
  updatedAt: _property('updatedAt'),
};
