import config from 'react-global-configuration';

config.set({
    foo: 'bar',
    bar: {
        baz: 'qux'
    },
    baz: ['qux'],
    navbar_background_color: 'dodgerblue',
    navbar_font_color: 'white',
    apiUrl: "https://localhost:44340/api",
    isFullWidth: true,
    brandName: "Easy Call",
});

export default config;