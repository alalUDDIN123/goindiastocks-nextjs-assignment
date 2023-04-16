import { companies } from '@/data/CompaniesLink';
import React from 'react';

function NavLink() {
  return (
    <>
      <div className='flex w-full items-center justify-between px-10 bg-black text-gray-200 overflow-x-auto overflex'>

        {/* Since p tag or compannies get reapeated so i store in a array of obj and simple did mapping */}
        {companies.map((company, index) => (
          <p
            key={index}
            style={{ whiteSpace: 'nowrap' }}
            className={company.className}
          >
            {company.label}
          </p>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .flex > p {
            margin-right: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}

export default NavLink;
