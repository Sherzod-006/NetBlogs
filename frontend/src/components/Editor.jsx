import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

export default function Editor({ value, onChange }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"], // <-- image va link qo‘yish
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "link",
    "clean",
  ];
  return (
    <div className="bg-gray-900 p-2 rounded-xl border border-gray-700">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        className="custom-editor"
      />
    </div>
  );
}
