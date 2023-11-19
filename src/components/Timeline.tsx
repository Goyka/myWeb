import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase";

export interface Posts {
  id: string;
  title: string;
  content: string;
  createdAt: number;
}

interface TimelineProps {
  prop: string;
}

const Timeline: React.FC<TimelineProps> = ({ prop }) => {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (prop) {
      const postsQuery = query(
        collection(db, prop),
        orderBy("createdAt", "desc")
      );
      try {
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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };
  return (
    <>
      {posts.map((item) => (
        <div
          key={item.id}
          className="py-2 px-3 text-slate-800 flex flex-col justify-start items-start max-mobile:px-1"
        >
          <span className="font-semibold text-lg ml-[26px] mb-2 max-mobile:ml-[14px] max-mobile:text-sm max-smallphone:text-sm max-mobile:font-bold max-smallphone:font-bold">
            {item.title}
          </span>
          <pre className="flex flex-col text-left">
            <p className="font-medium px-6 ml-1 text-sm mt-1 max-mobile:text-xs max-mobile:px-2">
              {item.content}
            </p>
          </pre>
        </div>
      ))}
    </>
  );
};

export default Timeline;
