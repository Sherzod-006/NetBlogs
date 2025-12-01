import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <main className="flex flex-col md:flex-row">
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
      <main className="bg-white dark:bg-gray-700 text-black dark:text-white h-170  md:h-130 md:w-2/4 m-1 md:m-3 rounded-lg shadow-lg p-2 md:p-3 overflow-auto"></main>
    </main>
  );
};

export default HomePage;
