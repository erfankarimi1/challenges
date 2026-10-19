import PropTypes from "prop-types";

export default function UserGreeting(props){
    const {
        isLoggedIn = false,
        userName = "Guest"
    } = props;
    

    const welcomeMessage = <h2 className="welcome-message">
                           Welcome {userName}
                           </h2> 
    const wrongUsername = 
                           <h2 className="wrong-username">
                           Wrong Username
                           </h2>
    
    return(isLoggedIn ? welcomeMessage : wrongUsername );
                                
}
UserGreeting.proptypes = {
    isLoggedIn : PropTypes.bool,
    userName: PropTypes.string,
}
