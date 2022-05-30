import PropTypes from 'prop-types';
import React from 'react';
import _isFunction from 'lodash/isFunction';
import _noop from 'lodash/noop';

import Image from '../../atoms/Image';
import PostMetaInfo from '../../molecules/PostMetaInfo';
import PostOrCommentAuthorInfo from '../../molecules/PostOrCommentAuthorInfo';
import postReader from '../../readers/post.reader';

function Post({
  post,
  renderAuthorAvatar,
  renderPostDesc,
  renderPostImage,
  renderPostInfo,
  renderPostMetaInfo,
  renderPostTitle,
  onCommentClick,
  onLikeClick,
}) {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <div className="overflow-hidden shrink-0 w-12 h-12 rounded-full">
          {
            _isFunction(renderAuthorAvatar)
              ? renderAuthorAvatar(post)
              : <Image src={postReader.authorAvatar(post)} alt={postReader.authorName(post)} />
          }
        </div>
        <div className="w-full">
          {
            _isFunction(renderPostInfo)
              ? renderPostInfo(post)
              : (
                <PostOrCommentAuthorInfo
                  name={postReader.authorName(post)}
                  dateTime={postReader.createdAt(post)}
                />
              )
          }
        </div>
      </div>
      <div className="mt-8 text-2xl">
        { _isFunction(renderPostTitle) ? renderPostTitle(post) : postReader.title(post) }
      </div>
      <div className="mt-8">
        {
          _isFunction(renderPostImage)
            ? renderPostImage(post)
            : (
              <div
                className="pt-[56.25%] bg-center bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${postReader.image(post)})` }}
              />
            )
        }
      </div>
      <div className="mt-8">
        {
          _isFunction(renderPostMetaInfo)
            ? renderPostMetaInfo(post)
            : (
              <PostMetaInfo
                likes={postReader.likesCount(post)}
                comments={postReader.commentsCount(post)}
                className="justify-around"
                onLikeClick={onLikeClick}
                onCommentClick={onCommentClick}
              />
            )
        }
      </div>
      <div className="mt-8">
        { _isFunction(renderPostDesc) ? renderPostDesc(post) : postReader.desc(post) }
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({}).isRequired,
  renderAuthorAvatar: PropTypes.func,
  renderPostImage: PropTypes.func,
  renderPostInfo: PropTypes.func,
  renderPostTitle: PropTypes.func,
  renderPostMetaInfo: PropTypes.func,
  renderPostDesc: PropTypes.func,
  onCommentClick: PropTypes.func,
  onLikeClick: PropTypes.func,
};

Post.defaultProps = {
  renderAuthorAvatar: null,
  renderPostImage: null,
  renderPostInfo: null,
  renderPostTitle: null,
  renderPostMetaInfo: null,
  renderPostDesc: null,
  onCommentClick: _noop,
  onLikeClick: _noop,
};

export default Post;
