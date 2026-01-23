# Copyright (c) 2026, BlackEye and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class RideOrder(Document):
	def validate(self):
		if not self.rate:
			frappe.throw("Please provide a rate!")
		total_distance = 0
		for order in self.orders:
			total_distance += order.distance

		self.total_amount = total_distance * self.rate
