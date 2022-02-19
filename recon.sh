#!/bin/bash

for site in $(cat subsedomains.txt); do
	request=$(whatweb http://$site)
	if [[ $(echo $request | grep -i wordpress) ]]; then
		echo -e "$site\tWordpress site"
	elif [[ $(echo $request | grep -i drupal) ]]; then
		echo -e "$site\tDrupal site"
	elif [[ $(echo $request | grep -i joomla) ]]; then
		echo -e "Joomla\tsite"
	else
		echo -e "$site\tCustom site"
	fi
done
