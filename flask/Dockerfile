FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get install -y python-pip
RUN pip install flask
COPY . /appy
WORKDIR /appy
ENTRYPOINT ["python"]
CMD ["appy.py"]