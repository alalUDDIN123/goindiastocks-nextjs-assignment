import { CompaniesLogoImages } from '@/data/CompaniesLogo';
import Image from 'next/image';
import React from 'react';

function CompaniesLogo() {

  return (
    <div className="flex flex-row gap-2 h-14 p-2 overflow-y-auto w-full bg-gray-200">
      {CompaniesLogoImages.map((company, index) => (
        <div className=' w-full ml-[20px]' key={index}>
          <div className='w-[100px] h-full'>
            <Image
              src={company.logo}
              width={80}
              height={80}
              priority={true}
              alt={`Company logo ${index}`}
              className='w-[100%] h-[100%]  !important'
            />
          </div>

        </div>
      ))}
    </div>

  );
}

export default CompaniesLogo;

{/* <div className="max-w-80 min-w-0">
<Image
  src={company.logo}
  width={80}
  height={80}
  priority={true}
  alt={`Company logo ${index}`}
  style={{ height: "30px" }}
/>
</div> */}