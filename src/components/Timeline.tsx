import { memo, useEffect, useState, useMemo } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../Firebase";
import { Link } from "react-router-dom";

export interface Posts {
  id: string;
  title: string;
  content: string;
  createdAt: number;
}

interface TimelineProps {
  prop: string;
}

const Timeline: React.FC<TimelineProps> = memo(({ prop }) => {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    fetchData();
  }, [prop]);

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
          const myData = {
            id: doc.id,
            title,
            content,
            createdAt,
          };
          return myData;
        });
        setPosts(datas);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const memoizedPosts = useMemo(() => posts, [posts]);

  return (
    <>
      {memoizedPosts.map((item) => (
        <div
          key={item.id}
          className="py-3 px-2 text-slate-800 flex flex-col justify-start items-start max-mobile:px-1"
        >
          <span className="font-semibold text-[19px] ml-[20px] mb-2 max-mobile:ml-[14px] max-mobile:text-[0.9em] max-smallphone:text-[0.9em] max-mobile:font-bold max-smallphone:font-bold">
            {item.title}
          </span>
          <pre className="flex flex-col text-left">
            <p className="font-medium px-6 text-sm mt-1 max-mobile:text-xs max-mobile:px-2">
              {item.content.includes("https")
                ? item.content.split(" ").map((word, index) =>
                    word.startsWith("https") ? (
                      <Link
                        key={index}
                        to={word}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500"
                      >
                        <span>↘︎ {word} </span>
                      </Link>
                    ) : (
                      <span key={index}>{word} </span>
                    )
                  )
                : item.content}
            </p>
          </pre>
        </div>
      ))}
    </>
  );
});

export default Timeline;
