const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserEmail = state => state.auth.user.email;
const selectIsFetchCurrentUsers = state => state.auth.isFetchCurrentUsers;
 
export const authSelectors = {
    selectIsLoggedIn,
    selectUserEmail,
    selectIsFetchCurrentUsers,
};
