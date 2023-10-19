const handlersRoute = () => ({
    notFoundHandler: function (ctx) {
        console.log(ctx);
    },
    modifyTitle: function (ctx) {
        /** @type { String } */
        let titleName = ctx.route;

        document.querySelector("title").textContent =
            "PokeApp " + titleName.split("/")[1];
    },
});

export { handlersRoute };
