jest.mock('react-native', () => {
    const rn = jest.requireActual('react-native');
    return Object.setPrototypeOf(
        {
            Platform: {
                OS: 'web', 
            },
            NativeModules: {
                ...rn.NativeModules,
            },
        },
        rn,
    );
});