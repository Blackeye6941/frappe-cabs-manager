# Copyright (c) 2026, BlackEye and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Vehicle(Document):
	def before_save(self):
		self.title = f"{self.model}-{self.manufactured_date}"
