import {
  MDXEditor,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  ListsToggle,
  Separator,
  CreateLink,
  listsPlugin,
} from "@mdxeditor/editor";

import "@mdxeditor/editor/style.css";

export default function Editor({ value, onChange }) {
  return (
    <MDXEditor
      markdown={value}
      onChange={onChange}
      plugins={[
        listsPlugin(),
        CreateLink(),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <Separator />
              <BoldItalicUnderlineToggles />
              <Separator />
              <BlockTypeSelect />
              <Separator />
              <ListsToggle /> {/* Toolbar tugmalari */}
              <Separator />
              <CreateLink />
            </>
          ),
        }),
      ]}
      className="border rounded-lg p-3 min-h-[200px]"
    />
  );
}
