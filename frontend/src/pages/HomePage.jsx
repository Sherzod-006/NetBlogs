const HomePage = () => {
  return (
    <div>
      <main className="bg-white dark:bg-gray-700 text-black dark:text-white h-170  md:h-130 md:w-2/3 opacity-70 m-1 md:m-3 rounded-lg shadow-lg p-2 md:p-3 overflow-auto">
        <section className="flex items-end">
          <img
            src="https://res.cloudinary.com/dzqw71hhs/image/upload/v1764249504/myapp/kidj0nlfkhkj5ugmx1ne.jpg"
            className="rounded-full w-9 h-9 object-cover"
          />
          <div>
            <h1>Welcome to NetBlogs</h1>
            <p>Your go-to platform for insightful blogs and articles.</p>
            <img
              src="https://res.cloudinary.com/dzqw71hhs/image/upload/v1763387692/main-sample.png"
              alt=""
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
