import { faker } from "@faker-js/faker";
import { TagItem } from "../types/Tags";

const generateTagsResponse = (tagsLength: number, total: number) => {
  const tag: TagItem = {
    has_synonyms: faker.datatype.boolean(),
    is_moderator_only: faker.datatype.boolean(),
    is_required: faker.datatype.boolean(),
    count: faker.number.int({ min: 0, max: 1000 }),
    name: faker.lorem.word(),
  };

  const arrayOfTags: TagItem[] = Array.from({ length: tagsLength }, () => tag);

  return {
    tags: arrayOfTags,
    total,
  };
};

export default generateTagsResponse;
