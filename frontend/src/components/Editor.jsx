import {
  MDXEditor,
  toolbarPlugin,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

export default function Editor({ value, onChange }) {
  return (
    <MDXEditor
      markdown={value}
      onChange={onChange}
      plugins={[
        toolbarPlugin(),
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
      ]}
      className="border rounded-lg p-3 min-h-[200px]"
    />
  );
}
