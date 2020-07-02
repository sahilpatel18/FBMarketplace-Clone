import React, { useState } from "react";
import { Text, View, FlatList} from "react-native";
import ListItem from "../components/lists/ListItem";
import Constants from "expo-constants";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";


const initialMessages = [
  {
    id: 1,
    title: "Red Jacket for sale. CHEAP ed Jacket for sale. CHEAPed Jacket for sale. CHEAPed Jacket for sale. CHEAP",
    description: "This jacket is red with 4 pockets. Cotton zip up polyester",
    image: require("../assets/circle.jpg"),
  },
  {
    id: 2,
    title: "How much for the shoesan i get more details for the shoes? are they in goan i get more details for the shoes? are they in goan i get more details for the shoes? are they in go?",
    description: "can i get more details for the shoes? are they in good shape from the inside? filer text an i get more details for the shoes? are they in goan i get more details for the shoes? are they in goan i get more details for the shoes? are they in goan i get more details for the shoes? are they in goan i get more details for the shoes? are they in go",
    image: require("../assets/circle2.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing,setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("tap", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
            setMessages([
                {
                    id: 2,
                    title: "How much for the shoesan i get more details for the shoes? are they in goan i get more details for the shoes? are they in goan i get more details for the shoes? are they in go?",
                    description: "can i get more details for the shoes? are they in good shape from the inside? filer text an i get more details for the shoes? are they in goan i get more details for the shoes? are they in goan i get more details for the shoes? are they in goan i get more details for the shoes? are they in goan i get more details for the shoes? are they in go",
                    description: "how much are you selling the item for? i would love to know!",
                    image: require("../assets/userimg.jpg"),
                  },
            ])
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
