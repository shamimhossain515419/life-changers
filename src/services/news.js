
export const GetNews = async () => {
     try {
          const res = await fetch("http://localhost:3000/api/news/get-new-all", {
               method: "GET",
               cache: "no-store"
          });
          const data = await res.json();
          return data?.data;
     } catch (error) {
          console.log(error);
     }
};


export const PostNews = async (formData) => {
     try {
          console.log(formData);
          const res = await fetch('/api/news/post-news', {
               method: "POST",
               headers: {
                    "content-type": "application/json",
               },
               body: JSON.stringify(formData),
          });
          const data = await res.json();
          return data

     } catch (e) {
          console.log(e);
     }
}

export const Get_single_id = async (id) => {
     try {
          console.log(id);
          const res = await fetch(`/api/news/get-by-id?id=${id}`, {
               method: "GET",
               cache:'force-cache'
          });
          const data = await res.json();
          return data?.data

     } catch (e) {
          console.log(e);
     }
}