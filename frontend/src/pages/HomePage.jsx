const HomePage = () => {
  return (
    <ul className="bg-white dark:bg-gray-700 text-black dark:text-white h-170  md:h-130 md:w-2/3 opacity-70 m-1 md:m-3 rounded-lg shadow-lg p-2 md:p-3 overflow-auto">
      <li className="border-b-4 border-gray-500 dark:border-gray-300 mb-2">
        <section className="flex space-x-2 md:space-x-4 ">
          <img
            src="https://res.cloudinary.com/dzqw71hhs/image/upload/v1764249504/myapp/kidj0nlfkhkj5ugmx1ne.jpg"
            className="rounded-full w-9 h-9 object-cover mt-4"
          />
          <div className="space-y-1 md:space-y-2">
            <h1 className="font-medium text-2xl">Welcome to NetBlogs</h1>
            <p className="text-lg">
              Your go-to platform for insightful blogs and articles.
            </p>
            <img
              src="https://res.cloudinary.com/dzqw71hhs/image/upload/v1763387692/main-sample.png"
              alt=""
            />
          </div>
        </section>
        <section className="flex justify-end space-x-4 mt-2 md:mt-4">
          <button className="hover:text-red-700 focus:text-red-800 font-bold">
            Like
          </button>
          <button className="hover:text-red-700 focus:text-red-800 font-bold">
            Comment
          </button>
          <button className="hover:text-red-700 focus:text-red-800 font-bold">
            Share
          </button>
        </section>
      </li>
    </ul>
  );
};

export default HomePage;
