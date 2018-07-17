import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import TodoApp from "./components/TodoApp";
import store from "./store/store";

import * as buffet from "@buffet/intl";
import { addLocaleData } from "react-intl";
import * as fr from "react-intl/locale-data/fr";

addLocaleData([...fr]);

(window as any).opentable = {};
(window as any).opentable.locale = "fr-CA";

buffet.registerMessages({
    "en-US": { "app.string": "Completed" },
    "fr-CA": {"app.string": "terminé"},
    // The rest of your locales here...
});



ReactDOM.render(
    <buffet.IntlProvider>
    <Provider key="provider" store={store}>
        <TodoApp key="todoapp" />
    </Provider>
    </buffet.IntlProvider>,
    document.getElementById("root"),
);
