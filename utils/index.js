import { image, name, lorem, address } from "faker";

export const IGData = [...Array(10).keys()].map((item, index) => ({
  id: index,
  name: name.findName(),
  storyUrl: image.avatar(),
  postUrl: image.image(),
  location: `${address.city()}, ${address.state()}`,
  caption: lorem.sentence(),
  comment: lorem.sentence(),
}));
