import { GetNews } from '@/services/news';
import React from 'react';

const page = async () => {

     const data = await GetNews();
     console.log(data);
     return (
          <div>
               <h1> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia laborum reiciendis sed architecto accusantium dolores perspiciatis, quod libero magnam, similique dolore. Quas dicta delectus velit nulla voluptate! Deserunt velit sequi et dolorum, quam eaque id modi numquam dignissimos ipsum necessitatibus voluptates quod praesentium tempora laboriosam magni, recusandae laborum delectus harum minima totam rerum ducimus. Quibusdam beatae totam facilis dignissimos deleniti dolore autem dolores, excepturi nisi placeat commodi repellendus delectus, cumque officia quae et magni neque fuga harum. Totam deserunt ut et odit alias nobis, consequatur nihil excepturi eos, provident dicta qui corrupti, praesentium amet voluptatibus quasi eveniet fugit nesciunt laborum.</h1>
          </div>
     );
};

export default page;