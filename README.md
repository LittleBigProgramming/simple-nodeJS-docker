# simple-nodeJS-docker

Some commands to get started: 

Build with tag: `docker build -t OWNER/CONTAINER_NAME .`

Run: `docker run -p 8080:8080 OWNER/CONTAINER_NAME`

How do I gain access to my container similar to `vagrant ssh`? 

All you have to do is run `docker ps` get the container ID relevant to the container you are working with,
this can easily be found via the tag added on the previous build step.

`docker exec -it CONTAINER_ID sh` which will allow shell access in interactive mode which is the -it in the command. 
