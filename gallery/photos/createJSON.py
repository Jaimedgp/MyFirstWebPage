import json
import glob

def readDescription(img_file):
    description_fl = "."+img_file.replace("IMG", "DES")+".txt"

    with open(description_fl, 'r') as fr:
        title = fr.readline().split("\n")[0]
        descrip = ""
        fr.readline()
        line = fr.readline()

        while not line.isspace():
            descrip += line
            line = fr.readline()

        place, date = fr.readline().split("\n")[0].split(",")

    return title, descrip, place, date


data = {"files":[]}
path = "./photos"
for image in glob.glob("./IMG_*"):
    name = image.split(".")

    src = path+name[1]+"."+name[2]

    des_info = readDescription(name[1])

    data['files'].append({
            'src': src,
            'title': des_info[0],
            'description': des_info[1],
            'date': des_info[3],
            'place': des_info[2]
    })


with open('../museum.json', 'w') as outfile:
        json.dump(data, outfile)
