const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserName = state => state.auth.user.name;
const selectIsFetchCurrentUsers = state => state.auth.isFetchCurrentUsers;
 
export const authSelectors = {
    selectIsLoggedIn,
    selectUserName,
    selectIsFetchCurrentUsers,
};
