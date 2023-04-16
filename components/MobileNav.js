import { useState, useEffect } from 'react';
import { mobileNavIcons } from "../data/MobileNav"

const MobileNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);



  // I am using localStorage for tracking the which icon actually user click
  // for showing which component or which tab user visting

  useEffect(() => {
    // Retriving index
    const savedActiveIndex = localStorage.getItem('activeIndex');
    if (savedActiveIndex !== null) {
      setActiveIndex(parseInt(savedActiveIndex));
    }
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
    // saving index
    localStorage.setItem('activeIndex', index);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full md:hidden">
      <ul className="fixed bottom-0 left-1/2 transform -translate-x-1/2 flex justify-between w-full bg-gray-900 p-2  shadow-md">
        {mobileNavIcons.map((item, index) => (
          <li
            key={index}
            className={`block md:hidden ${activeIndex === index ? 'text-blue-500' : 'text-gray-500'
              }`}
          >
            <a
              href={item.link}
              className="flex items-center"
              onClick={() => handleClick(index)}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
