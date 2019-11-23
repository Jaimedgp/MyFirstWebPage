import glob
import os
import sys


images_list = sorted(glob.glob("./IMG_*"))
descrip_list = sorted(glob.glob("./DES_*"))

if "DES_0000.txt" in descrip_list[0]:
    descrip_list.pop(0)


if len(images_list) > len(descrip_list):
    print("Miss some description")
    sys.exit()
elif len(images_list) < len(descrip_list):
    print("Miss some photo")
    sys.exit()

for i in range(len(images_list)):
    os.replace(images_list[i], "IMG_%04d.jpg" %(i+1))
    os.replace(descrip_list[i], "DES_%04d.txt" %(i+1))
