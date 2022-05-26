export const reducer = (state, action) => {
    switch (action.type) {
        case 'change-theme':
            const theme = state.theme === 'info' ? 'dark' : 'info'
            return { ...state, theme };
        case 'set-hotels':
            return { ...state, hotels: action.hotels };
        case 'set-loading':
            return { ...state, loading: action.loading };
        case 'login':
            return { ...state, isAuthenticated: true };
        case 'logout':
            return { ...state, isAuthenticated: false };
        default:
            throw new Error('Nie ma takiej akcji: ' + action.type);
    }
}

export const intialState = {
    hotels: [],
    loading: true,
    isAuthenticated: false,
    theme: 'info',
}