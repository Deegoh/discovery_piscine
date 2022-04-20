#!/bin/bash
if (($# == 0))
then
	echo No arguments supplied
else
	while ((0 < $#))
	do
		echo $1
		shift 1
	done
fi
