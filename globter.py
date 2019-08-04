import csv
import json
from flask import Flask

c_names=""
city_names=""
city_lat=""
city_Long=""
toa=""
jsonDump=""
year=""
list=[]
noat=0

with open('C:\\Users\\ANKIT\\Downloads\\gter.csv')as file:
    next(file)
    reader=csv.reader(file)
    for row in reader:
        if(int(row[1])>=2011):
            if(row[8]=='INDIA' or row[8]=='india' or row[8]=='India'):
                c_names=row[8]
                year=row[1]
                city_names=row[12]
                city_lat=row[13]
                city_Long=row[14]
                toa=row[29]
                jsonDump=json.dumps({"country_names":c_names,"year":year,"city_name":city_names,"latitude":city_lat,"longitude":city_Long,"toa":toa})
                list.append(jsonDump)

data=""
for i in range(len(list)):
    if i==0:
        print("["+list[i]+",")
        data="["+list[i]+","
    elif i==len(list)-1:
        print(list[i]+"]")
        data+=list[i]+"]"
    else:
        print(list[i]+",")
        data+=list[i]+","
print(data)

app=Flask(__name__)

@app.route("/output")
def output():
    return data

if __name__=="__main__":
    app.run()

