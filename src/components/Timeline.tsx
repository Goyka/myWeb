import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase";

export interface Posts {
  id: string;
  title: string;
  content: string;
  createdAt: number;
}

const Timeline = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const postsQuery = query(
      collection(db, "home"),
      orderBy("createdAt", "desc")
    );
    const res = await getDocs(postsQuery);
    const datas = res.docs.map((doc) => {
      const { title, content, createdAt } = doc.data();
      return {
        id: doc.id,
        title,
        content,
        createdAt,
      };
    });
    setPosts(datas);
  };
  return (
    <>
      {posts.map((item) => (
        <div
          key={item.id}
          className="py-2 px-3 text-slate-800 flex flex-col justify-start items-start"
        >
          <span className="font-semibold text-xl ml-[26px] mb-2">
            {item.title}
          </span>
          <pre className="flex flex-col text-left">
            <p className="font-medium px-6 ml-1 text-sm mt-1 ">
              {item.content}
            </p>
          </pre>
        </div>
      ))}
    </>
  );
};

export default Timeline;
