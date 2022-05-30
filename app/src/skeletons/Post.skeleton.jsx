import React from 'react';

import { shimmer, toBase64 } from '../App.constants';
import Image from '../atoms/Image';
import Post from '../organisms/Post';
import Skeleton from '../atoms/Skeleton';

function PostSkeleton() {
  return (
    <div>
      <Post
        post={{}}
        renderAuthorAvatar={() => (
          <Image
            src={`data:image/svg+xml;base64,${toBase64(shimmer())}`}
            alt="avatar loader"
            className="w-12 h-12 rounded-full blur-sm"
          />
        )}
        renderPostInfo={() => (
          <>
            <Skeleton className="h-7" />
            <Skeleton className="mt-2 h-2" />
          </>
        )}
        renderPostTitle={() => <Skeleton className="h-8" />}
        renderPostImage={() => (
          <div
            className="pt-[56.25%] bg-center bg-no-repeat bg-cover blur-lg"
            style={{ backgroundImage: `url(data:image/svg+xml;base64,${toBase64(shimmer())})` }}
          />
        )}
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
