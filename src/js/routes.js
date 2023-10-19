/**
 * Listado de rutas a las que el usuario puede acceder a la app
 * en caso de ingresar un `path` que no se detalle en el siguiente
 * array, se muestra la ruta `notfound`.
 */
export default [
    // Home
    {
        path: "/",
        handler: "modifyTitle", // optional
        view: "/pages/Home.html",
    },
    // Login
    {
        path: "/login",
        handler: "modifyTitle",
        view: "/pages/Login.html",
    },
    // 404 Not Found
    {
        path: "notfound",
        handler: "[notFoundHandler, modifyTitle]",
        view: "/pages/404.html"
    }
];
