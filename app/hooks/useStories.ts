import { useEffect, useState } from "react";
import { IStory } from "./typesStories";
import {
  onSnapshot,
  query,
  collection,
  orderBy,
  getDocs,
} from "@firebase/firestore";
import { db } from "../firebase";

export const useStories = () => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getDataFirebase() {
      const querySnapshot = await getDocs(collection(db, "stories"));
      setStories(
        querySnapshot.docs.map((d) => {
          return { _id: d.id, ...d.data() } as IStory;
        })
      );
    }
    getDataFirebase();
    setIsLoading(false);
  }, []);

  console.log(stories);
  return { stories, isLoading };
};
