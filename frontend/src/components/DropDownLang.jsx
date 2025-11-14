import { useState } from "react";

const DropDownLang = ({ isOpen, handleBarClose, Body }) => {
    const [selectedLang, setSelectedLang] = useState("en");
  return (
    <section
      onMouseLeave={handleBarClose}
      className={`fixed top-15 md:top-20 bg-white dark:bg-gray-700 p-2 rounded-lg shadow-lg ${
        isOpen ? "block" : "hidden"
      }`}
    >
        <ul className="space-x-1">
            {Body.map((item) => (
              <li key={item.value} className={`hover:text-orange-500 rounded-lg px-2 cursor-pointer ${selectedLang === item.value ? 'text-orange-500' : 'dark:text-white'}`} onClick={() => setSelectedLang(item.value)}>
                {item.name}
              </li>
            ))}
        </ul>
    </section>
  );
};

export default DropDownLang
