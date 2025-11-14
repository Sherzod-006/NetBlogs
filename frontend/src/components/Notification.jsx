import { useEffect, useState } from "react";

const Notification = ({ message }) => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
      if(message){
        setVisible(true)
        setTimeout(() => {
          setVisible(false)
        }, 4000);

      }
    }, [message]);

    if (!message) return null;
  return (
    <main
      className={`${visible ? "fixed" : "hidden"} top-0 left-1/2 transition-all duration-700`}
    >
      <div
        className="
        w-0 h-0
        border-l-[5px] border-l-transparent
        border-r-[5px] border-r-transparent
        border-b-9 border-b-gray-500 dark:border-b-gray-100
      "
      />

      <section className=" p-2 transform -translate-x-1/2 bg-gray-500 dark:bg-gray-100 text-white dark:text-black rounded-2xl shadow-2xl z-50">
        <p>{message}</p>
      </section>
    </main>
  );
}

export default Notification
