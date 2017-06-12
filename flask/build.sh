#!/bin/bash

docker build -t hello:latest .

docker run -d -p 5000:5000 hello:latest
