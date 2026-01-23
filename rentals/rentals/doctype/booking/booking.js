// Copyright (c) 2026, BlackEye and contributors
// For license information, please see license.txt

frappe.ui.form.on("Booking", {
	refresh(frm) {
	frm.add_custom_button("Accept", () => {
		frm.set_value("status", "Accepted");
		frm.save();
	});
	},
});
