FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get install -y python-pip
RUN pip install flask
COPY public /appy/public
COPY appy.py /appy/appy.py
COPY modules /appy/modules
COPY rest /appy/rest
WORKDIR /appy
ENTRYPOINT ["python"]
CMD ["/appy/appy.py"]