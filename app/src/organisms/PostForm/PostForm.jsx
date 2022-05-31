import { AiOutlineArrowRight } from 'react-icons/ai';
import React, { useState } from 'react';

import Button, { VARIANTS } from '../../atoms/Button';
import FileChooser from '../../atoms/FileChooser';
import { TextareaField, TextboxField } from '../../molecules/FormFields';

function PostForm() {
  const [title, setTitle] = useState('');

  return (
    <div className="p-4 w-full rounded-md border shadow-lg md:w-4/6 lg:w-2/6">
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
