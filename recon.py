import requests, termcolor, bs4
import threading

banner = """
	   #    #    ######  #######  #####  ####### #     #    #    #    
	  #    #     #     # #       #     # #     # ##    #     #    #   
	 #    #      #     # #       #       #     # # #   #      #    #  
	#    #       ######  #####   #       #     # #  #  #       #    # 
	 #    #      #   #   #       #       #     # #   # #      #    #  
	  #    #     #    #  #       #     # #     # #    ##     #    #   
	   #    #    #     # #######  #####  ####### #     #    #    # 
"""
print(termcolor.colored(banner, 'blue', attrs={'blink':3, 'bold':1}))
print("\t\t\t\t\t\t" + termcolor.colored("Author: myatminmoe", 'red'))
print("[+] This will take a while...")

inpage = 50
domains = {}

def get_domains():
    
    """main_source = requests.get('https://www.myanmar.gov.mm/en/government-website')
    m_soup = bs4.BeautifulSoup(main_source.text, features="lxml")
    m_links = m_soup.findAll('a')
    for mlink in m_links:
        mlink = mlink.get('href')
        if mlink.startswith('http'):
            mlink = mlink.split('/')[2]
            if mlink.endswith('.gov.mm') or mlink.endswith('.edu.mm'):
                domains.add(mlink)
    """
    stat = 0
    while stat <= 380:
        dork = requests.get(f"https://www.google.com/search?q=site:gov.mm&num={inpage}&start={stat}")
        soup = bs4.BeautifulSoup(dork.text, features="lxml")
        get_links = soup.findAll('a')
        get_titles = soup.select('h3')
        j = 0
        for i in get_links:
            href = i.get('href')
            if "url?q=" in href:
                link = href.split('/')[3]
                if link.endswith('.gov.mm') and (link not in domains):
                    #domains.add(link)
                    title = get_titles[j]
                    domains[link] = title.getText()
                    j += 1
                    
        stat += inpage
    
    print(domains)
    print("Total Domains: " + str(len(domains)))
    print()

"""
def get_title():
    titles = {}
    for site in domains:
        try:
            r = requests.get(f"https://{site}")
            r.raise_for_status()
        except Exception as err:
            print(f"[-] Can't establish with {site}")
            continue
        soup = bs4.BeautifulSoup(r.text)
        title = soup.select('title')[0].getText()
        titles[site] = title
    for s,t in titles.items():
        print(s, t)
"""
def main():
    get_domains()
    print()
    #run_fast = threading.Thread(target=get_title)
    #run_fast.start()

if __name__ == "__main__":
    main()
