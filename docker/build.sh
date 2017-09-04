#!/bin/bash

cd `dirname $0`/..

docker build -t appy:latest -f docker/Dockerfile .

docker run -d -p 5000:5000 --label appy appy:latest
