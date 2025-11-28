import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <ul className="bg-white dark:bg-gray-700 text-black dark:text-white h-170  md:h-130 md:w-2/3 opacity-70 m-1 md:m-3 rounded-lg shadow-lg p-2 md:p-3 overflow-auto">
      <li className="border-b-4 border-gray-500 dark:border-gray-300 mb-2 cursor-pointer flex md:flex-row flex-col">
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
              className="w-auto max-h-60 rounded-lg object-cover"
            />
          </section>
        </main>
        <main className="flex flex-col my-auto space-y-4 md:space-y-6 text-md md:text-xl">
          <button className="hover:text-red-500 focus:text-red-500 font-bold">
            <FontAwesomeIcon icon={faHeart} />
            <h1 className="hidden md:block">Like</h1>
          </button>
          <button className="hover:text-red-500 focus:text-red-500 font-bold">
            <FontAwesomeIcon icon={faComment} />
            <h1 className="hidden md:block">Comment</h1>
          </button>
          <button className="hover:text-red-500 focus:text-red-500 font-bold">
            <FontAwesomeIcon icon={faPaperPlane} />
            <h1 className="hidden md:block">Share</h1>
          </button>
        </main>
      </li>
    </ul>
  );
};

export default HomePage;
