import { setClientSelected } from "../actions/client";

const defaultState = {
    webNotifications: true,
    soundNotifications: true
};

export default function NotificationReducer(state = defaultState, action) {
    
        switch (action.type) {
            case "NOTIFICATION_SETTINGS_CHANGED":
                setLocalNotifications(action.data.webNotifications,action.data.soundNotifications);
                return {
                    webNotifications: action.data.webNotifications,
                    soundNotifications: action.data.soundNotifications
                };
            break;
            default:
                //TODO: move localStorage settings to redux.
                if(typeof state.webNotifications !== 'undefined'){
                    //setClientSelected(state.webNotifications,state.soundNotifications);
                }else{
                    setLocalNotifications(1, 1);
                }
                return state;
        }
}

function setLocalNotifications(web, sound){
    if(localStorage){
        localStorage.setItem("webNotifications",web);
        localStorage.setItem("soundNotifications",sound);
    }
}