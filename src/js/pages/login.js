export default () => ({
    title: "Welcome to Login Page!",

    submit: function () {
        // Redireccionando a Home
        this.$router.redirect("/");
    },
});
