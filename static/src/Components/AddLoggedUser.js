import { useContext, useEffect } from "react";
import { UserContext } from "../Context/AddUserContext.js";



/**Component to catch Live Price comming From server by Websocket */
function AddLoggedUser(props) {
  var { elementUser, setMyUser } = useContext(UserContext);
  if (elementUser === undefined) {
    throw new Error("elementUser was used outside of its Provider");
  }
  useEffect(() => {
    //to prevent add empty row in case Mount Unmount triggered through filter component, "NO" value used for DEV understading , Have to set it up to {}

    if (elementUser.length != 0) {//initial state 

      props.moreUsers(elementUser)
      // setMyUser([])//initialize
    }

  }, [elementUser])
  return (null);
}
export default AddLoggedUser;
