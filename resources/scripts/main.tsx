import React from 'react';
import { createInertiaApp } from '@inertiajs/react';

import '../css/app.css';

createInertiaApp({
	pages: {
		path: "../pages",
		extension: ".tsx",
		transform: (name, page) => name.replaceAll(".", "/"),
	},
	withApp(app){
		return(<>
			<main className="dark text-foreground bg-background">
				{app}
			</main>
		</>)
	}
});
