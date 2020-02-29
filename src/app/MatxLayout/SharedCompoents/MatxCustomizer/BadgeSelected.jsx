import { Badge } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles"

const BadgeSelected = withStyles(theme => ({
  badge: {
    top: "0",
    right: "0",
    height: "32px",
    width: "32px",
    borderRadius: "50%"
  }
}))(Badge);

export default BadgeSelected;
