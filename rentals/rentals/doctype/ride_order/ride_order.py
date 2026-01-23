# Copyright (c) 2026, BlackEye and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class RideOrder(Document):
	def validate(self):
		pass
		#self.total_amount = self.rate*self.orders.distance
