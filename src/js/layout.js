import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import injectContext from "./store/appContext";

import { Contacts } from "./views/Contacts.js";
import { AddContact } from "./views/addContact.js";
import { EditContact } from "./views/editContact.js";
import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";

const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
               <Navbar/>
					<Routes>
						{/* <Route path="/index.html" element={<Contacts />} /> */}
						<Route path="/" element={<Contacts />} />
						{/* <Route path="/contacts" element={<Contacts />} /> */}
						<Route path="/add" element={<AddContact />} />
						<Route path="/edit/:id" element={<EditContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer/>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);