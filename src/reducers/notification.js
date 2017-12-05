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
                setLocalNotifications(1, 1);
                return state;
        }
}

function setLocalNotifications(web, sound){
    if(localStorage){
        localStorage.setItem("webNotifications",web);
        localStorage.setItem("soundNotifications",sound);
    }
}