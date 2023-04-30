import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../routes/Routes";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Header />
					<Routes />
					<Footer />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
};

export default Layout;
