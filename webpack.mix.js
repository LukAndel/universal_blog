require("dotenv").config();
const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

if (!mix.inProduction()) {
    // development settings:
    //     add source maps
    mix.webpackConfig({
        devtool: "source-map",
    }).sourceMaps();
}

mix
    // don't rewrite URLs in CSS files
    .options({
        processCssUrls: false,
    })

    // open and serve with browsersync
    .browserSync({
        host: "localhost",
        port: 3000,
        proxy: {
            target: process.env.APP_URL, // don't forget to set APP_URL in .env
        },
    })

    // add versioning
    .version();

// ADD ASSETS TO COMPILE HERE:

// Examples:
// mix.sass('resources/css/app.scss', 'public/css');
// mix.js('resources/js/library.js', 'public/js');
// mix.js('resources/js/app.js', 'public/js').react();

mix.js("resources/js/app.js", "public/js").postCss(
    "resources/css/app.css",
    "public/css",
    [
        //
    ]
);
mix.js("resources/js/page.js", "public/js").react();
mix.copyDirectory("vendor/tinymce/tinymce", "public/js/tinymce");
mix.js("resources/js/blog.js", "public/js").react();
mix.sass("resources/css/blog-layout/basic.scss", "public/css");
mix.sass("resources/css/blog-layout/blog-lukas.scss", "public/css");
mix.sass("resources/css/blog-layout/blog-jiri.scss", "public/css");
mix.sass("resources/css/blog-layout/blog-oskar.scss", "public/css");
mix.sass("resources/css/admin-layout/admin.scss", "public/css");
mix.sass("resources/css/admin-layout/navigation.scss", "public/css");
mix.sass("resources/css/admin-layout/welcome.scss", "public/css");
mix.js("resources/js/welcome.js", "public/js").react();
mix.sass("resources/css/admin-layout/datepicker/cdnjs.scss", "public/css/datepicker");
mix.sass("resources/css/admin-layout/datepicker/cdnjs2.scss", "public/css/datepicker");
mix.js("resources/js/Page/Lukas/Navbar.jsx", "public/js").react();

