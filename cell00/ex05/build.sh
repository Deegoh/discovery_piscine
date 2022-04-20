#!/bin/bash
i=1
j=$#
if [ $j -eq 0 ]
then
	echo No arguments supplied
else
	while [ $i -le $j ]
	do
		mkdir ex$1
		shift 1
		((i++))
	done
	ls -l
fi
