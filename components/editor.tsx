"use client";

import { useCallback, useEffect, useRef } from 'react';

import EditorJS from '@editorjs/editorjs';
//@ts-ignore

import Tooltip from 'editorjs-tooltip';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useParams } from 'next/navigation';
import { Id } from '@/convex/_generated/dataModel';
import { File } from '@/types';
import { EDITOR_JS_TOOLS } from './tools';

interface EditorProps {
  files: File | undefined;
  readonly?: boolean;
}

export const Editor = ({files, readonly = false}: EditorProps) => {
  const ref = useRef<EditorJS>();
  const params = useParams();
  const file: File | any = useMutation(api.file.upDateFile);

  const initEditor = useCallback(() => {
    const editor = new EditorJS({
      readOnly: readonly,
      data: files?.content ? JSON.parse(files.content) : undefined,
      autofocus: true,
      holder: "editorjs",
      tools: EDITOR_JS_TOOLS,
      onChange: (event) => {
        editor.save().then((output: any) => {
          file({
            _id: params.fileId as Id<"files">,
            content: JSON.stringify(output),
            fileName: files?.fileName
          }).catch((error: any) => {
            console.error(error);
          })
        })
      }
    })
    ref.current = editor
  }, [files?.content, file, params, files?.fileName, readonly])

  useEffect(() => {
    initEditor();
  }, []);

  return (
    <>
      {/* <Button onClick={onclick}>save</Button> */}
      <div className='h-full px-3'>
        <div id="editorjs"/>
      </div>
    </>
  )
}