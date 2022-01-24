import { useEffect, useState } from "react";
import {
  onSnapshot,
  query,
  collection,
  orderBy,
  where,
  getDocs,
} from "@firebase/firestore";
import { db } from "../firebase";
import { IAccount } from "../components/screens/home/accounts/types";
import { useAuth } from "./useAuth";

export const useAccounts = () => {
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    async function getDataFirebase() {
      const querySnapshot = await getDocs(
        query(collection(db, "accounts"), where("userId", "==", user?.uid))
      );
      setAccounts(
        querySnapshot.docs.map((d) => {
          return { _id: d.id, ...d.data() } as IAccount;
        })
      );
    }
    getDataFirebase();
    setIsLoading(false);
  }, []);

  return { accounts, isLoading };
};
