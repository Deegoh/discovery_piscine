#! /bin/sh
ls | wc -w | awk '{print $1}'
