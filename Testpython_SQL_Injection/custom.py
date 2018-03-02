import os
import json
import unittest
import requests
import ast

class CustomFun():
    # check stt code
    def check_stt_code(self, r):
        try:
            print("Status Code: %s" % (r.status_code))
        except requests.exceptions.HTTPError as err:
            raise AssertionError(err)
            
    def check_data_exits(self, r):
        self.assertTrue(r, "Khong Ton Tai Data Hoac Rong ")

    def check_type_data(self, data, typedata):
        self.assertIsInstance(data, typedata, "Data khong phai kieu : %s " % (typedata) )
    