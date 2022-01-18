import React, { FC } from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import { IStory } from "../../../../hooks/typesStories";
import tw from "tailwind-rn";
import { useData } from "../../../../hooks/useData";

const StoryItem: FC<{ story: IStory }> = ({ story }) => {
  const { setActiveStories } = useData();

  return (
    <Pressable onPress={() => setActiveStories(story.images)}>
      <View
        style={{
          ...tw("w-24 h-24 rounded-2xl ml-3 border-solid border-blue-400"),
          padding: 0,
          borderWidth: 2,
        }}
      >
        <ImageBackground
          source={{ uri: story.images[0] }}
          resizeMode="cover"
          style={tw("w-full h-full justify-end")}
          imageStyle={tw("rounded-xl")}
        >
          <Text style={{ ...tw("text-white"), fontSize: 12, margin: 8 }}>
            {story.heading}
          </Text>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

export default StoryItem;
