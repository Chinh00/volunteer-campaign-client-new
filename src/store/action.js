const UserAction = (state, action) => {
    switch (action?.type) {
        case "CHANGE_TITLE": {
            return {
                ...state,
                title: action?.payload?.title
            }
        }
    }
}

export default UserAction