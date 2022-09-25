export const authReducer = (state, action) => {
    const {payload, type} = action;
    switch(type) {
        case "set_auth":
            return {...state, auth: payload.auth, user: payload.user}
    }
}