import { View, Text ,Image} from 'react-native';
import React from 'react';
const image="https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1552566626-52f8b828add9%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%253D%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frestaurant&tbnid=8pYty70OGEB7EM&vet=12ahUKEwj50MWlkMr1AhXZ-TgGHRlLBscQMygAegUIARDZAQ..i&docid=8gSFC4td7_0SrM&w=1000&h=667&itg=1&q=restaurant%20images&ved=2ahUKEwj50MWlkMr1AhXZ-TgGHRlLBscQMygAegUIARDZAQ"
const title='udupi upahar'
const description=' quality foods '
export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
  );

  const RestaurantName = (props) => (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.name}
    </Text>
  );
  
  const RestaurantDescription = (props) => (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
      }}
    >
      {props.description}
    </Text>
  );
