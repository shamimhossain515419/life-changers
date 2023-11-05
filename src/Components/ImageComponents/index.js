import React from 'react';
import photoImage from '../../../public/avatar.png'
import Image from 'next/image';
const ImageComponent = ({photo, rounded, width,height}) => {
     return (
          <div>
               <Image className={` ${rounded}  ${width} ${height} rounded-md object-fill`} src={photo ?photo  : photoImage} alt='image'></Image> 
          </div>
     );
};

export default ImageComponent;