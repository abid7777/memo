import { AiOutlineArrowRight } from 'react-icons/ai';
import React, { useState } from 'react';

import Button, { VARIANTS } from '../../atoms/Button';
import FileChooser from '../../atoms/FileChooser';
import TextareaField from '../../molecules/TextareaField';
import TextboxField from '../../molecules/TextboxField';

function PostForm() {
  const [title, setTitle] = useState('');

  return (
    <div>
      <h3 className="text-xl text-center">Create your Memo</h3>
      <div className="flex flex-col gap-10 mt-8">
        <div><TextboxField labelText="Title" value={title} onInput={setTitle} /></div>
        <div><TextareaField /></div>
        <div><FileChooser /></div>
        <div><TextboxField labelText="Tags (max 5)" /></div>
        <div className="flex gap-2 justify-end">
          <Button variant={VARIANTS.LINK}>Clear</Button>
          <Button variant={VARIANTS.PRIMARY} className="flex gap-1 justify-center items-center">
            <span>Post</span>
            <AiOutlineArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
