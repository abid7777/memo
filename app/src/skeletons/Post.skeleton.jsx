import React from 'react';

import Post from '../organisms/Post';
import Skeleton from '../atoms/Skeleton';

function PostSkeleton() {
  return (
    <div>
      <Post
        post={{}}
        renderAuthorAvatar={() => <Skeleton className="w-full h-full rounded-full" />}
        renderPostInfo={() => (
          <>
            <Skeleton className="h-7" />
            <Skeleton className="mt-2 h-2" />
          </>
        )}
        renderPostTitle={() => <Skeleton className="h-8" />}
        renderPostImage={() => (<Skeleton className="pt-[56.25%]" />)}
        renderPostMetaInfo={() => <Skeleton className="h-8" />}
        renderPostDesc={() => (
          <div className="flex flex-col gap-2">
            {Skeleton.generate(5, 'h-6')}
          </div>
        )}
      />
    </div>
  );
}

export default PostSkeleton;
