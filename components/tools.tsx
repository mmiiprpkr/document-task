const Header = require('editorjs-header-with-anchor');
// import Header from '@editorjs/header';
//@ts-ignore
import Alert from "editorjs-alert"
//@ts-ignore
import List from "@editorjs/list";
//@ts-ignore
import Embed from '@editorjs/embed';
//@ts-ignore
import Underline from "@editorjs/underline"
//@ts-ignore
import ChangeCase from "editorjs-change-case"
//@ts-ignore
import Strikethrough from "@sotaproject/strikethrough"
//@ts-ignore
import Checklist from '@editorjs/checklist'
//@ts-ignore
import SimpleImage from "@editorjs/simple-image";
//@ts-ignore
import Marker from '@editorjs/marker';
//@ts-ignore
import InlineCode from '@editorjs/inline-code';
//@ts-ignore
import ColorPlugin from "editorjs-text-color-plugin"
//@ts-ignore
import AlignmentBlockTune from "editorjs-text-alignment-blocktune"
//@ts-ignore
import TextVariantTune from '@editorjs/text-variant-tune';
import Title from "title-editorjs";
//@ts-ignore
const Paragraph = require('editorjs-paragraph-with-alignment');
//@ts-ignore
import ImageTool from '@editorjs/image';
//@ts-ignore
import NestedList from '@editorjs/nested-list';
//@ts-ignore
import Delimiter from '@editorjs/delimiter';
//@ts-ignore
import Warning from '@editorjs/warning';
//@ts-ignore
import CodeTool from '@editorjs/code';
//@ts-ignore
import Table from '@editorjs/table'
//@ts-ignore
import LinkTool from '@editorjs/link';
//@ts-ignore
import IndentTune from 'editorjs-indent-tune'
import { uploadByFile } from "@/lib/uploadImagebyFiles";
import { uploadImageByUrl } from "@/lib/uploadImagebyUrl";




export const EDITOR_JS_TOOLS = {
  textVariant: TextVariantTune,
  code: CodeTool,
  title: {
    class: Title
  },
  indentTune: IndentTune,
  textAlignment: {
    class: AlignmentBlockTune,
    config: {
      default: "left",
      blocks: {
        header: "center"
      }
    }
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    tunes: ["textAlignment", "textVariant", "indentTune"]
  },
  delimiter: Delimiter,
  header: {
    class: Header,
    inlineToolbar: true,
    tunes: ["textAlignment", "indentTune"],
    config: {
      placeholder: "Enter a header",
      levels: [1,2,3,4,5],
      defaultLevel: 2,
    }
  },
  alert: {
    class: Alert,
    config: {
      defaultType: "primary",
      messagePlaceholder: "Enter something"
    }
  },
  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3,
    },
  },
  list: {
    class: NestedList || List,
    inlineToolbar: true,
    tunes: ["textAlignment"],
    config: {
      defaultStyle: 'unordered'
    },
  },
  checklist: {
    class: Checklist,
    tunes: ["textAlignment", "textVariant", "indentTune"],
  },
  image: {
    class: ImageTool,
    inlineToolbar: true,
    config: {
      uploader: {
        uploadByUrl: uploadImageByUrl,
        uploadByFile: uploadByFile
      },
    }
  },
  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        codepen: true
      }
    }
  },
  underline: {
    class: Underline
  },
  strikethrough: {
    class: Strikethrough
  },
  marker: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
       defaultColor: '#FFBF00',
       type: 'marker',
       icon: `<svg fill="#000000" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6 c0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z"></path> <path d="M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z"></path> </g> <g> <path d="M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z"></path> </g> </g></svg>`
      }       
  },
  inlineCode: {
    class: InlineCode
  },
  changeCase: {
    class: ChangeCase
  },
  color: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
       colorCollections: ['#EC7878','#9C27B0','#673AB7','#3F51B5','#0070FF','#03A9F4','#00BCD4','#4CAF50','#8BC34A','#CDDC39', '#FFF'],
       defaultColor: '#FF1300',
       customPicker: true
    }     
  },
  linkTool: {
    class: LinkTool,
    config: {
      endpoint: '/api/link',
    },
  },
  warning: Warning,
}
