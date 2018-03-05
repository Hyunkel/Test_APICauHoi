import requests
import unittest
import xmlrunner
import custom
import ast
import re
url_main = "http://localhost:3007/cauhoi?level=1"


class Demo_Test(unittest.TestCase, custom.CustomFun):
    def testnow(self):
        print unittest.TestCase.id(self)
        print url_main
        f = open('sql_map.txt', 'r')
        listurl = []
        x = f.readlines()
        for i in x:
            m = re.search(r"(?<==POKER).*?(?=', version)", i).group(0)
            listurl.append(m)
        for j in listurl:
            url_test = url_main + j
            print url_test
            r = requests.get(url_test)
            # check data exist
            self.assertTrue(r.content)
            data = ast.literal_eval(r.content)
            # check type data
            self.check_type_data(data, dict)
            print r.content
if __name__ == "__main__":
    unittest.main(testRunner=xmlrunner.XMLTestRunner(output='./Result_xml'))