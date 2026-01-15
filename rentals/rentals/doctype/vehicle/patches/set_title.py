import frappe

def execute():
	vehicles = frappe.db.get_all("Vehicle", pluck="name")
	for v in vehicles:
		vehicle = frappe.db.get_doc("Vehicle", v)
		vehicle.set_title()
		vehicle.save()
