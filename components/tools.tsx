const Header = require("editorjs-header-with-anchor");
// import Header from '@editorjs/header';
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
import SimpleImage from "@editorjs/simple-image";
//@ts-ignore
import Marker from "@editorjs/marker";
//@ts-ignore
import InlineCode from "@editorjs/inline-code";
//@ts-ignore
import ColorTool from "editorjs-inline-color";
//@ts-ignore
const ColorPlugin = require("editorjs-text-color-plugin");
const TextColor = require("@itech-indrustries/editor-js-text-color");
//@ts-ignore
import AlignmentBlockTune from "editorjs-text-alignment-blocktune";
//@ts-ignore
import TextVariantTune from "@editorjs/text-variant-tune";
import Title from "title-editorjs";
//@ts-ignore
const Paragraph = require("editorjs-paragraph-with-alignment");
//@ts-ignore
import ImageTool from "@editorjs/image";
//@ts-ignore
import NestedList from "@editorjs/nested-list";
//@ts-ignore
import Delimiter from "@editorjs/delimiter";
//@ts-ignore
import Warning from "@editorjs/warning";
//@ts-ignore
// import CodeTool from '@editorjs/code';
//@ts-ignore
import Table from "@editorjs/table";
//@ts-ignore
import LinkTool from "@editorjs/link";
//@ts-ignore
import CodeTool from "@rxpm/editor-js-code";
//@ts-ignore
import Quote from "@juratbek/editorjs-quote";
import IndentTune from "editorjs-indent-tune";
import { uploadByFile } from "@/lib/uploadImagebyFiles";
import { uploadImageByUrl } from "@/lib/uploadImagebyUrl";
const ImageGallery = require("@rodrigoodhin/editorjs-image-gallery");
//@ts-ignore
import editorjsCodeflask from "@calumk/editorjs-codeflask";
//@ts-ignore
import AttachesTool from "@editorjs/attaches";
//@ts-ignore
import RawTool from "@editorjs/raw";
//@ts-ignore
import ToggleBlock from 'editorjs-toggle-block';


export const EDITOR_JS_TOOLS = {
  toggle: {
    class: ToggleBlock,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    inlineToolbar: true,
    tunes: ["textAlignment", "indentTune"],
    config: {
      placeholder: "Enter a header",
      levels: [1, 2, 3, 4, 5],
      defaultLevel: 2,
    },
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    tunes: ["textAlignment", "textVariant", "indentTune"],
  },
  title: {
    class: Title,
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+O",
    tunes: ["textAlignment", "indentTune"],
    config: {
      quotePlaceholder: "Enter a quote",
      captionPlaceholder: "Quote's author",
    },
  },
  code: editorjsCodeflask,
  list: {
    class: NestedList || List,
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
  // Color: {
  //   class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
  //   config: {
  //      colorCollections: ['#EC7878','#9C27B0','#673AB7','#3F51B5','#0070FF','#03A9F4','#00BCD4','#4CAF50','#8BC34A','#CDDC39', '#FFF'],
  //      defaultColor: '#00BCD4',
  //      type: 'text',
  //   }
  // },
  inlineCode: {
    class: InlineCode,
  },
  changeCase: {
    class: ChangeCase,
  },

  warning: Warning,
};
