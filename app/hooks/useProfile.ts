import React, { useState, useEffect, useMemo } from "react";
import {
  collection,
  onSnapshot,
  query,
  where,
  limit,
} from "@firebase/firestore";
import { useAuth } from "./useAuth";
import { db } from "../firebase";

interface IProfile {
  _id: string;
  displayName: string;
  docId: string;
}

export const useProfile = () => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<IProfile>({} as IProfile);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("start profile loading");
    onSnapshot(
      query(collection(db, "users"), where("_id", "==", user?.uid), limit(1)),
      (snapshot) => {
        const profile = snapshot.docs.map((d) => ({
          ...(d.data() as IProfile),
          docId: d.id,
        }))[0];

        setProfile(profile);
        setName(profile.displayName);
        setIsLoading(false);
        console.log("profile ready!");
      }
    );
  }, []);

  const value = {
    profile,
    isLoading,
    name,
    setName,
  };

  return value;
};
