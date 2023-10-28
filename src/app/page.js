
'use client'

import { PostNews } from "@/services/news"

export default function Home() {
  const newada ={
     name: "Follow-up to the activities of the project to support stability and livelihoods for villages affected by the conflict in the countryside of Idlib",
    description: "Within Supporting the resilience and Livelihood of conflict-affected communities in Idleb countryside project. The establishment for human care and development (MASRRAT) – through supporting the wheat value chain, MASRRAT Establishment started distribution process of free bread for IDPs families in/ out camps.",
    date: "2022-12-21",
    title: "So, MASRRAT’s field team will continue in distributing the free bread for 91 consecutive days, each day 2472 bread bundles for 1500 IDPs HHs.",
    image: [
      "https://masrrat.org/wp-content/uploads/2022/10/3-780x437.jpg",
      "https://i.ibb.co/tZhNtG8/6-1024x482.jpg",
      "https://masrrat.org/wp-content/uploads/2023/01/4-1024x728.jpg",
      "https://masrrat.org/wp-content/uploads/2023/01/5-1024x728.jpg"
    ],
    comment: [
      {
        "name": "shamim Hossain",
        "email": "shamim@gmail.com",
        "image": "https://i.ibb.co/dDg0Wqb/istockphoto-1319763895-612x612.jpg",
        "comment": "Providing each farmer with 150 kg of composed fertilizer NPK 15-15-15 and 250 kg of durum wheat seed, sufficient for cultivating 1 hectare, demonstrates a practical and tangible approach towards building productive assets and creating income-generating opportunities. This not only helps secure livelihoods but also contributes to the overall sustainability of the community."
      },
      {
        "name": "shamim Hossain",
        "email": "shamim@gmail.com",
        "image": "https://i.ibb.co/MPndYKM/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg",
        "comment": "Providing each farmer with 150 kg of composed fertilizer NPK 15-15-15 and 250 kg of durum wheat seed, sufficient for cultivating 1 hectare, demonstrates a practical and tangible approach towards building productive assets and creating income-generating opportunities. This not only helps secure livelihoods but also contributes to the overall sustainability of the community."
      },
      {
        "name": "shamim Hossain",
        "email": "shamim@gmail.com",
        "image": "https://i.ibb.co/4TbfFTv/download.jpg",
        "comment": "Providing each farmer with 150 kg of composed fertilizer NPK 15-15-15 and 250 kg of durum wheat seed, sufficient for cultivating 1 hectare, demonstrates a practical and tangible approach towards building productive assets and creating income-generating opportunities. This not only helps secure livelihoods but also contributes to the overall sustainability of the community."
      }
    ]
  }

  const handleCliekt = async () => {
    console.log("shmimadf");
    const result = await PostNews(newada);
    console.log(result);
  }
  return (
    <div>
      <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, repudiandae ipsum consectetur itaque iure ad odit accusamus delectus quasi nihil illo porro enim voluptatum tempora, asperiores magni consequatur autem quia error eligendi id tempore animi! Animi amet enim eaque dolore aliquam, exercitationem accusamus, repellat sapiente eligendi, quibusdam molestiae distinctio! Natus exercitationem deserunt blanditiis, ea necessitatibus nobis odit nam odio non deleniti, possimus iusto maxime expedita porro quas dolores! Distinctio quis eum velit dolore praesentium. Dignissimos at quisquam ab, magni laboriosam laborum eligendi maxime nisi quidem? Quidem impedit rerum cumque distinctio id quas, temporibus similique voluptatum expedita itaque assumenda odit et? </h1>



      <button onClick={handleCliekt} className=" text-4xl font-bold p-8"> clent</button>

    </div>
  )
}
