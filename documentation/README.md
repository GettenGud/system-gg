# System-GG Master Application

This application is designed to bring all of the services together that run on the GG server. They should work generally on linux based systems if the system has the required software.

## Application Start
This application is configured as a service and a commandline application


## System-GG Applications

### getten-git
Creates and manages remotes for developers. Very similar to what Github does except you're the one with all of your data at the end of the day.

### gg-cmd
The commandline interpreter for controlling system-gg.

### gg-prox
Nginx based reverse proxy configuration for the server. Allows you to configure virtual host public facing port mappings for common service ports like http and https.

### gg-schema
The projects and services that the system is utilizing are stored on a local mongo database, gg-schema defines all of the Models in the system.

### ggemon
Our very own daemon. It runs your service for you and assigns a port to your application.

### repo-hooker
For remotes **not** hosted using getten-git. Repo-hooker is able to utilize webhooks to automatically pull in commits for automatic updating.