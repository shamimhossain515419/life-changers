import React from 'react';

const CommonTitle = ({title,paragraph, align}) => {
     return (
          <div>
               <div className={align}>
                    <h1 className=' text-lg md:text-xl  font-medium  uppercase  primary'> {title} </h1>
                     <h1 className=' text-2xl font-semibold capitalize  third md:text-4xl   my-2'> {paragraph} </h1>
               </div>

          </div>
     );
};

export default CommonTitle;