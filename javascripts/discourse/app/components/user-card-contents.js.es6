import { default as userCardContents } from "discourse/app/components/user-card-contents";
import DiscourseURL from "discourse/lib/url";

export default userCardContents.extend({
  _show(_, target) {
    DiscourseURL.routeTo(`${target.href}/summary`);
    return false;
  },
});
