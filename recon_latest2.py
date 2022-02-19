import requests, termcolor, bs4
import time, socket, json, subprocess, re

banner = """
	   #    #    ######  #######  #####  ####### #     #    #    #    
	  #    #     #     # #       #     # #     # ##    #     #    #   
	 #    #      #     # #       #       #     # # #   #      #    #  
	#    #       ######  #####   #       #     # #  #  #       #    # 
	 #    #      #   #   #       #       #     # #   # #      #    #  
	  #    #     #    #  #       #     # #     # #    ##     #    #   
	   #    #    #     # #######  #####  ####### #     #    #    # 
"""
print(termcolor.colored(banner, 'blue', attrs={'bold':1}))
print("\t\t\t\t\t\t" + termcolor.colored("#Author: <myatminmoe>", 'red', attrs={'bold':1,'blink':3}))
print("[+] This will take a while...")

inpage = 50
domains = {}
status = {}
ips = {}
secure = {}
tech = {}
compro = {}
cms = {}
hosting_type = {}
title = []
site = []

def get_domains():
    stat = 0

    main_source = requests.get('https://www.myanmar.gov.mm/en/government-website')
    m_soup = bs4.BeautifulSoup(main_source.text, features="lxml")
    m_links = m_soup.findAll('a')
    md = []
    for mlink in m_links:
        mlink = mlink.get('href')
        if mlink.startswith('http'):
            mlink = mlink.split('/')[2]
            if (mlink.endswith('.gov.mm') or mlink.endswith('.edu.mm')) and (mlink not in md):
                md.append(mlink)
    main_domain = dict.fromkeys(md, 'Undetectable')

    while stat <= 380:
        dork = requests.get(f"https://www.google.com/search?q=site:gov.mm&num={inpage}&start={stat}")
        soup = bs4.BeautifulSoup(dork.text, features="lxml")
        get_links = soup.select('.kCrYT')
       
        for t in range(len(get_links)):
            t = get_links[t].find('h3')
            if t == None:
                continue
            title.append(t.getText())

        for l in range(len(get_links)):
            if get_links[l].findAll('a'):
                site.append(get_links[l].findAll('a')[0]['href'].split('/')[3])
                
                
       
        stat += inpage
    
    anod = dict(zip(site, title))

    for k,v in anod.items():
        if k not in main_domain:
            main_domain[k] = v

    domains.update(main_domain)

    dom = open('domains.txt', 'w')
    for d in domains.keys():
        dom.write(d + "\n")
    dom.close()

def test_date():
    today = time.time()
    date = time.ctime(today).split()
    print(f"{date[2]}/{date[1]}/{date[-1]}")

def get_ip():
    for key in domains.keys():
        try:
            addr = socket.gethostbyname(key)
            ips[key] = addr
        except Exception as e:
            print(f"[-] {key} seems down!: {e}")
            ips[key] = "DNS ERROR"
    for k,v in ips.items():
        print(k,"\t\t",v)

def hosting():
    api = "cee1b343832896a79c801c08bf911643ead6dec1"
    for dm,ip in ips.items():
        r = requests.get(f"https://api.viewdns.info/reverseip/?host={ip}&apikey={api}&output=json")
        data = json.loads(r.text)
        try:
            host_count = data['response']['domain_count']
            if host_count == '1' or host_count == '0':
                hosting_type[dm] = "Dedicated"
            else:
                hosting_type[dm] = "Shared : " + host_count
        except:
            hosting_type[dm] = "Undetectable"
    for k,v in hosting_type.items():
        print(k,"\t\t\t\t",v)

def what_web():
    for d in domains.keys():
        cmd = f"whatweb http://{d}"
        try:
            process = subprocess.Popen(cmd.split(), stdout=subprocess.PIPE)
            output, error = process.communicate()
            data = output.decode('utf-8')
            data = data.split(',')
            for t in data:
                mo = re.search('HTTPServer', t)
                if mo:
                    tech[d] = t
                else:
                    tech[d] = "Undetected"

        except:
            print("Down")
    for k,v in tech.items():
        print(k,"\t\t",v)

def is_compromised():
    mylist = []
    f = open('domains.txt', 'r')
    for k in f:
        mylist.append(k.split('\n')[0])
    f.close()
    for k in mylist:
        site = k.split('.')
        if len(site) == 4:
            k = '.'.join(site[1:])
        compro[k] = "No"
        r = requests.get(f"https://www.google.com/search?q=intext:{k}%20site:www.zone-h.org")
        soup = bs4.BeautifulSoup(r.text, features="lxml")
        links = soup.findAll('a')
        for i in links:
            link = i.get('href')
            if link.startswith('/url?q=h'):
                link = link.split('/')[3]
                if link == 'www.zone-h.org' or link == 'zone-h.org':
                    compro[k] = "Yes"
                    break
    print(len(compro))
    for k,v in compro.items():
        print(k,"\t\t\t\t",v)

def secure_or_not():
    for url in domains.keys():
        secure[url] = ""
        try:
            r = requests.head(f"http://{url}", allow_redirects=False, timeout=3)
            response = r.status_code
            if response == 301:
                secure[url] = "HTTPS"
            else:
                secure[url] = "HTTP"
        except:
            secure[url] = "DNS ERROR"
    
    for k,v in secure.items():
        print(k,"\t\t\t\t",v)

def server_status():
    for k,v in ips.items():
        if v == "DNS ERROR":
            status[k] = "DOWN"
        else:
            status[k] = "UP"

    for k,v in status.items():
        print(k,"\t\t\t\t",v)

def main():
    #get_domains()
    #for k,v in domains.items():
    #    print(k,"\t\t\t\t",v)
    print()
    #test_date()
    print()
    #get_ip()
    print()
    #server_status()
    print()
    #is_compromised()
    print()
    #secure_or_not()
    print()
    #hosting()
    print()
    #what_web()
    print()
    print("Total Domains: %s" %(len(domains)))

if __name__ == "__main__":
    main()
