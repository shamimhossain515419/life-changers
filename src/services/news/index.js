export const GetNews = async () => {
     try {

          const res = await fetch('/api/news/get-new-all', {
               method: "GET",
          });
          const data = res.json();
          return data

     } catch (e) {
          console.log(e);
     }



}
export const PostNews = async (formData) => {
     try {
          const res = await fetch('/api/news/post-news', {
               method: "POST",
               headers: {
                    "content-type": "application/json",
               },
               body: JSON.stringify(formData),
          });
          const data = res.json();
          return data

     } catch (e) {
          console.log(e);
     }



}