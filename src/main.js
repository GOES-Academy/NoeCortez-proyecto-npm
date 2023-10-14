// Import our custom CSS
import "./scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import "pinecone-router-middleware-views";
import PineconeRouter from "pinecone-router";
import Alpine from "alpinejs";

import routes from "./js/routes";
import InitComponents from "./js";

document.getElementById("router").innerHTML = routes
    .map(
        (route) =>
            `<template x-route="${route.path}" x-handler="${route.handler}" x-view="${route.view}"></template>`
    )
    .join("");

window.PineconeRouter = PineconeRouter;
window.Alpine = Alpine;

InitComponents();

Alpine.plugin(PineconeRouter);
Alpine.start();
