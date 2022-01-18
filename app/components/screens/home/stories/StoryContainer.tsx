import React, { FC } from "react";
import tw from "tailwind-rn";
import { useData } from "../../../../hooks/useData";
//@ts-ignore
import { StoryContainer as SC } from "react-native-stories-view";

const StoryContainer: FC = () => {
  const { activeStories, setActiveStories } = useData();

  return (
    activeStories && (
      <SC
        visible
        enableProgress
        images={activeStories}
        duration={20}
        onComplete={() => setActiveStories(null)}
        containerStyle={tw("w-full h-full")}
      />
    )
  );
};

export default StoryContainer;
