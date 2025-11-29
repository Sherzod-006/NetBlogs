import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

const HomePage = () => {
  const initialConfig = {
    namespace: "NetBlogsEditor",
    onError(error) {
      console.error(error);
    },
  };
  const [editor] = useLexicalComposerContext();

  return (
    <main className="flex">
      <ul className="bg-white dark:bg-gray-700 text-black dark:text-white h-170  md:h-130 md:w-2/4 m-1 md:m-3 rounded-lg shadow-lg p-2 md:p-3 overflow-auto">
        <li className="border-b-4 border-gray-500 dark:border-gray-300 mb-2 cursor-pointer flex flex-col space-y-2">
          <div className="flex md:flex-row flex-col">
            <main className="flex space-x-2 md:space-x-4 ">
              <img
                src="https://res.cloudinary.com/dzqw71hhs/image/upload/v1764249504/myapp/kidj0nlfkhkj5ugmx1ne.jpg"
                className="rounded-full w-9 h-9 object-cover mt-2"
              />
              <section className="space-y-1 md:space-y-2">
                <h1 className="font-medium text-2xl">Welcome to NetBlogs</h1>
                <p className="text-lg">
                  Your go-to platform for insightful blogs and articles.
                </p>
                <img
                  src="https://res.cloudinary.com/dzqw71hhs/image/upload/v1763387692/main-sample.png"
                  className="w-auto max-h-60 md:max-h-70 rounded-lg object-cover"
                />
              </section>
            </main>
            <main className="flex flex-row md:flex-col mx-auto md:items-start my-2 md:my-auto space-x-6 md:space-y-6 text-md md:text-xl">
              <button className="hover:text-red-500 focus:text-red-500 font-bold">
                <FontAwesomeIcon icon={faHeart} />
                Like
              </button>
              <button className="hover:text-red-500 focus:text-red-500 font-bold">
                <FontAwesomeIcon icon={faComment} />
                Comment
              </button>
              <button className="hover:text-red-500 focus:text-red-500 font-bold">
                <FontAwesomeIcon icon={faPaperPlane} />
                Share
              </button>
            </main>
          </div>
          <form className="relative">
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full p-2 rounded-lg border border-gray-300 outline-none focus:border-orange-500 overflow-x-none my-2"
            />
            <button
              type="submit"
              className="text-orange-500 absolute right-5 bottom-4"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </li>
      </ul>
      <main className="bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg shadow-lg p-4">
        <LexicalComposer initialConfig={initialConfig}>
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="min-h-[200px] p-3 outline-none bg-white dark:bg-gray-800 rounded" />
            }
            placeholder={
              <div className="p-3 text-gray-400">Blog yozuvini kiriting...</div>
            }
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
        </LexicalComposer>
        <div className="flex gap-2 border-b p-2 bg-gray-100">
          <button onClick={() => editor.dispatchCommand("formatBold", true)}>
            Bold
          </button>
          <button onClick={() => editor.dispatchCommand("formatItalic", true)}>
            Italic
          </button>
          <button
            onClick={() => editor.dispatchCommand("formatUnderline", true)}
          >
            Underline
          </button>
          <button onClick={() => document.execCommand("insertOrderedList")}>
            Ordered List
          </button>
          <button onClick={() => document.execCommand("insertUnorderedList")}>
            Bullet List
          </button>
          <button
            onClick={() =>
              document.execCommand("createLink", "https://example.com")
            }
          >
            Link
          </button>
        </div>
      </main>
    </main>
  );
};

export default HomePage;
