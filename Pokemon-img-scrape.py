#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import requests
import os
import shutil
from bs4 import BeautifulSoup as bs
from tqdm import tqdm
from urllib.parse import urljoin, urlparse


# In[ ]:


soup = bs(requests.get("PICK YOUR WEBSITE HERE").content, "html.parser")


# In[ ]:


urls = []
# finds html tag with "img"
for img in tqdm(soup.find_all("img"), "Extracting images"):
    # obtaining the source img
    img_url = img.attrs.get("src")
    if img_url == None:
        continue
#     this conditional may not be necessary - depends on what images you want from the website  
    if "uploads" in img_url:
        #adds to img url list
        urls.append(img_url)
    
    if not img_url:
        continue
    
    


# In[ ]:


# change directory where to save here
directory = os.path.join("/", "c:", "Desktop","Web Development", "Pokemon","public","images")
os.chdir(directory)


# In[ ]:


print(directory)


# In[ ]:


#saves image to folder path
for url in urls:
    try:
        image_content = requests.get(url, stream = True)
        filename = url.split("/")[-1]
        
        if image_content.status_code == 200:
            image_content.decode_content = True 
        
            with open(filename, 'wb') as f:
                shutil.copyfileobj(image_content.raw, f)
                print(f"SUCCESS - saved {url} - as {filename}")
            
    except Exception as e:
        print(f"ERROR - Could not save {url} - {e}")

