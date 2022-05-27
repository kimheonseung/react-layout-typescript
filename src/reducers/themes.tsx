/* State */
type ThemesState = {
  isDark: boolean
}
const initState: ThemesState = {
  isDark: true
}

/* Action Type */
const CHANGE = 'themes/CHANGE' as const;
export const change = () => ({
  type: CHANGE,
});
type ThemesAction =
  | ReturnType<typeof change>;

/* Reducer */
const themeChanger = (
  state: ThemesState = initState,
  action: ThemesAction
): ThemesState => {
  switch (action.type) {
    case CHANGE:
      return { isDark: !state.isDark };
    default:
      return state;
  }
}

export default themeChanger;
