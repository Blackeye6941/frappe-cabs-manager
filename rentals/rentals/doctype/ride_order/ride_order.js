// Copyright (c) 2026, BlackEye and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
	refresh(frm) {
 	},
});

frappe.ui.form.on('Ride Booking Item', {
	refresh(frm) {
		// your code here
	},
	distance(frm) {
		console.log("Distance changed");
	}
})
