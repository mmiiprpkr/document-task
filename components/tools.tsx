const Header = require("editorjs-header-with-anchor");
const Paragraph = require("editorjs-paragraph-with-alignment");
const TextColor = require("@itech-indrustries/editor-js-text-color");
const ImageGallery = require("@rodrigoodhin/editorjs-image-gallery");
const MermaidTool = require('editorjs-mermaid');

//@ts-ignore
import Alert from "editorjs-alert";
//@ts-ignore
import List from "@editorjs/list";
//@ts-ignore
import Embed from "@editorjs/embed";
//@ts-ignore
import Underline from "@editorjs/underline";
//@ts-ignore
import ChangeCase from "editorjs-change-case";
//@ts-ignore
import Strikethrough from "@sotaproject/strikethrough";
//@ts-ignore
import Checklist from "@editorjs/checklist";
//@ts-ignore
import Marker from "@editorjs/marker";
//@ts-ignore
import InlineCode from "@editorjs/inline-code";
//@ts-ignore
//@ts-ignore
import AlignmentBlockTune from "editorjs-text-alignment-blocktune";
//@ts-ignore
import TextVariantTune from "@editorjs/text-variant-tune";
import Title from "title-editorjs";
//@ts-ignore
//@ts-ignore
import ImageTool from "@editorjs/image";
//@ts-ignore
import NestedList from "@editorjs/nested-list";
//@ts-ignore
import Delimiter from "@editorjs/delimiter";
//@ts-ignore
import Warning from "@editorjs/warning";
//@ts-ignore
import Table from "@editorjs/table";
//@ts-ignore
import LinkTool from "@editorjs/link";
//@ts-ignore
import Quote from "editorjs-quoted";
//@ts-ignore
import IndentTune from "editorjs-indent-tune";
//@ts-ignore
import editorjsCodeflask from "@7polo/editorjs-code2";
//@ts-ignore
import AttachesTool from "@editorjs/attaches";
//@ts-ignore
import RawTool from "@editorjs/raw";
//@ts-ignore

import ToggleBlock from 'editorjs-toggle-block';
import Annotation from "@/lib/annotion";
import NoticeTune from "@/lib/notic";
import Tooltip from "@/lib/tooptip"

import { uploadByFile } from "@/lib/uploadImagebyFiles";
import { uploadImageByUrl } from "@/lib/uploadImagebyUrl";

export const EDITOR_JS_TOOLS = {
  // anchorTune: AnchorTune,
  tooltip: {
    class: Tooltip,
    config: {
      location: 'left',
      underline: true,
      placeholder: 'Enter a tooltip',
      highlightColor: '#FFEFD5',
      backgroundColor: '#154360',
      textColor: '#FDFEFE',
      holder: 'editorId',
    }
  },
  noticeTune: NoticeTune,
  annotation: Annotation,
  toggle: {
    class: ToggleBlock,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    inlineToolbar: true,
    tunes: ["textAlignment", "noticeTune"],
    config: {
      placeholder: "Enter a header",
      levels: [1, 2, 3, 4, 5],
      defaultLevel: 2,
    },
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    tunes: ["textVariant", "indentTune"],
  },
  title: {
    class: Title,
  },
    quoted: {
      class: Quote,
      tunes: ["textVariant", "indentTune"],
      config:{
        placeholder:"Type something",
        defaultType:"info",
      }
    },
  code: editorjsCodeflask,
  list: {
    class: NestedList, List,
    inlineToolbar: true,
    tunes: ["textAlignment"],
    config: {
      defaultStyle: "unordered",
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
        uploadByFile: uploadByFile,
      },
    },
  },
  linkTool: {
    class: LinkTool,
    config: {
      endpoint: "/api/link",
    },
  },
  embed: {
    class: Embed,
    config: {
      services: {
        instagram: true,
        facebook: true,
        twitter: true,
        "twitch-channel": true,
        "twitch-video": true,
        pinterest: true,
        youtube: true,
        codepen: true,
      },
    },
  },
  mermaid: MermaidTool,
  raw: RawTool,
  attaches: {
    class: AttachesTool,
    config: {
      uploader: {
        uploadByFile,
      },
    },
  },
  delimiter: Delimiter,
  // audioPlayer: AudioPlayer,
  imageGallery: ImageGallery,
  textVariant: TextVariantTune,
  ColorPicker: TextColor,
  indentTune: IndentTune,
  textAlignment: {
    class: AlignmentBlockTune,
    config: {
      default: "left",
      blocks: {
        header: "center",
      },
    },
  },
  alert: {
    class: Alert,
    config: {
      defaultType: "primary",
      messagePlaceholder: "Enter something",
    },
  },
  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3,
    },
  },
  underline: {
    class: Underline,
  },
  strikethrough: {
    class: Strikethrough,
  },
  Marker: {
    class: Marker,
    shortcut: "CMD+SHIFT+M",
  },
  inlineCode: {
    class: InlineCode,
  },
  changeCase: {
    class: ChangeCase,
  },

  warning: Warning,
};
