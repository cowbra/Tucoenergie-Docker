# Tucoenergie - Roof material analysis Web Applications
 
## 🌟 Goal

> Make a website that allows you to validate or not the material of a building with its image from the IGN ([Institut national de l'information géographique et forestière](https://www.ign.fr/)) database


##  Informations

1. Don't forget to edit the [.env](.env) file with your information

2. This application is deployed under a `reverse proxy` (*reverse-proxy-manager*). If you just want to deploy it to the web without having a subdomain, here is the [docker-compose](without_reverse_proxy/docker-compose.yml) to use

3. If you choose to use a reverse-proxy, don't forget to edit the network section of docker-compose. Here is the reverse-proxy used in this project : `https://nginxproxymanager.com/guide/` and my [configuration](reverse_proxy/docker-compose.yml)

## 🗒 Dependencies

1. Install ***docker*** and the ***docker compose*** plugin

2. You must `be connected to my registry` to be able to pull the images

3. If you want your application to update automatically, you must launch a [WatchTower](https://containrrr.dev/watchtower/
) container

## How to deploy the Web App :
* Clone this repository on your computer : 
   > ```shell
   >  git clone https://github.com/cowbra/WebApp.git
   > ```

* Depending on the use of a reverse-proxy or not, run the appropriate docker compose with the command:
   > ```shell
   >  docker compose up -d
   > ```

* Go to `http://localhost` if you don't have a reverse-proxy, otherwise configure it (SSL certificates, subdomain,...)

## Now that you have unlocked your skills 🔓, it's up to you 👊!