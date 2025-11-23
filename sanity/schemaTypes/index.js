import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import seo from "./seo";

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, seo],
};
