export const PostUser = async (formData) => {
     try {
          const res = await fetch('/api/users/post-user', {
               method: "POST",
               headers: {
                    "content-type": "application/json",
               },
               body: JSON.stringify(formData),
          })

          const data = await res.json()

          return data
     } catch (e) {
          console.log(e);
     }
}