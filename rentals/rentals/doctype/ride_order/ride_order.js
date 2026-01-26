// Copyright (c) 2026, BlackEye and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
	refresh(frm) {
 	},
	rate(frm){
		frm.trigger("update_total");
	},
	update_total(frm){
		const total = 0;
		for(let item of frm.doc.orders){
			total += item.distance;
		}
		const amount = total * frm.doc.rate;
		frm.set_value("total_amount", amount);
	},
});

frappe.ui.form.on('Ride Booking Item', {
	refresh(frm) {
		// your code here
	},
	distance(frm) {
		frm.trigger("update_total");
	},
	orders_remove(frm){
		frm.trigger("update_total");
	}
})
