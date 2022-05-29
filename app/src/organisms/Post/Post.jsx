import PropTypes from 'prop-types';
import React from 'react';
import _isFunction from 'lodash/isFunction';
import _noop from 'lodash/noop';

import Image from '../../atoms/Image';
import RelativeDate from '../../atoms/RelativeDate';
import PostMetaInfo from '../../molecules/PostMetaInfo';
import postReader from '../../readers/post.reader';

function Post({
  post,
  renderAuthorAvatar,
  renderAuthorName,
  renderPostDateTime,
  renderPostTitle,
  renderPostImage,
  renderPostMetaInfo,
  renderPostDesc,
  onLikeClick,
  onCommentClick,
}) {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <div className="overflow-hidden shrink-0 w-12 h-12 rounded-full">
          {
            _isFunction(renderAuthorAvatar)
              ? renderAuthorAvatar(post)
              : (
                <Image
                  src={postReader.authorAvatar(post)}
                  alt={postReader.authorName(post)}
                />
              )
          }
        </div>
        <div className="w-full">
          <h3 className="mb-2 text-xl">
            {
              _isFunction(renderAuthorName) ? renderAuthorName(post) : postReader.authorName(post)
            }
          </h3>
          {
            _isFunction(renderPostDateTime)
              ? renderPostDateTime(post)
              : <RelativeDate dateTime={postReader.createdAt(post)} />
          }
        </div>
      </div>
      <div className="mt-8 text-2xl">
        {_isFunction(renderPostTitle) ? renderPostTitle(post) : postReader.title(post)}
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
        {
          _isFunction(renderPostDesc) ? renderPostDesc(post) : postReader.desc(post)
        }
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({}).isRequired,
  renderAuthorAvatar: PropTypes.func,
  renderAuthorName: PropTypes.func,
  renderPostDateTime: PropTypes.func,
  renderPostTitle: PropTypes.func,
  renderPostImage: PropTypes.func,
  renderPostMetaInfo: PropTypes.func,
  renderPostDesc: PropTypes.func,
  onLikeClick: PropTypes.func,
  onCommentClick: PropTypes.func,
};

Post.defaultProps = {
  renderAuthorAvatar: null,
  renderAuthorName: null,
  renderPostDateTime: null,
  renderPostTitle: null,
  renderPostImage: null,
  renderPostMetaInfo: null,
  renderPostDesc: null,
  onLikeClick: _noop,
  onCommentClick: _noop,
};

export default Post;
