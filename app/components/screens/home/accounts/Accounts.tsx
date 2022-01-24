import React, { FC, Fragment } from "react";
import { View, Text } from "react-native";
import { useAccounts } from "../../../../hooks/useAccounts";
import Loader from "../../../ui/Loader";
import Padding from "../../../ui/Padding";
import tw from "tailwind-rn";
import AccountItem from "./item/AccountItem";

const Accounts: FC = () => {
  const { accounts, isLoading } = useAccounts();
  console.log(accounts);

  return (
    <Padding>
      {isLoading ? (
        <Loader />
      ) : accounts.length ? (
        accounts.map((account, idx) => (
          <Fragment key={account._id}>
            <AccountItem account={account} />
            {idx + 1 !== accounts.length && (
              <View
                style={{
                  borderBottomColor: "#E0E1E2",
                  borderBottomWidth: 1,
                  marginBottom: 24,
                }}
              />
            )}
          </Fragment>
        ))
      ) : (
        <Text>You don't have cards</Text>
      )}
    </Padding>
  );
};

export default Accounts;
