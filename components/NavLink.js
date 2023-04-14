import React from 'react';

function NavLink() {
  return (
    <>
      <div className='flex w-full items-center justify-between px-10 bg-black text-gray-200 overflow-x-auto'>
        <p style={{ whiteSpace: 'nowrap' }}>.50%</p>
        <p style={{ whiteSpace: 'nowrap' }}>.21%</p>
        <p style={{ whiteSpace: 'nowrap' }}>NIFY BANK</p>
        <p style={{ whiteSpace: 'nowrap' }}>41,599</p>
        <p style={{ whiteSpace: 'nowrap' }}>0.11%</p>
        <p style={{ whiteSpace: 'nowrap' }}>BALIFINCE</p>
        <p style={{ whiteSpace: 'nowrap' }}>6435.50</p>
        <p style={{ whiteSpace: 'nowrap' }}>0.35%</p>
        <p style={{ whiteSpace: 'nowrap' }}>BHARTIARTL</p>
        <p style={{ whiteSpace: 'nowrap' }}>0.5</p>
        <p style={{ whiteSpace: 'nowrap' }}>72%</p>
        <p style={{ whiteSpace: 'nowrap' }}>HDFCBANK</p>
        <p style={{ whiteSpace: 'nowrap' }}>41,599</p>
        <p style={{ whiteSpace: 'nowrap' }}>0.11%</p>
        <p style={{ whiteSpace: 'nowrap' }}>HINDUNLVR</p>
        <p style={{ whiteSpace: 'nowrap' }}>6435.50</p>
        <p style={{ whiteSpace: 'nowrap' }}>INDIGO</p>
        <p style={{ whiteSpace: 'nowrap' }}>BHARTIARTL</p>
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
