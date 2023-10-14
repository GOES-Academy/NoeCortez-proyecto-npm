import { handlersRoute } from "./handlers";
import home from "./pages/home";
import login from "./pages/login";

/**
 * Inicializamos todos los componentes de Alpinejs
 */
const InitComponents = () => {
    Alpine.data("router", handlersRoute);
    Alpine.data("login", login);
    Alpine.data("home", home);
};

export default InitComponents;
