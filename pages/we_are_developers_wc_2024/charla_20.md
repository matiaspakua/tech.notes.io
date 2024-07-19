# Serverless Java in action: cloud agnostic design patterns and tips

## sobre el uso 

graficos que demuestra que serverless solo usaitlizas los recursos cuando los necesitas, o sea, cuando la cantidad de request aumenta, entonces el ambiente se encarga de crear instancias y bajarlas.

## Java & Serverless

supersonix, subatomic java quarkus
el problem se ve cuando los vendor exijen que se importen funciones especifcicas  o librerias del SDK de cada vendor en nuestro código, esto lo hace imposible de migarr.

1. AWS lambdas, functions ==> tiene dependencias del vendor
2. Serverless container => ahora no tenemos dependencias de librerias, pero si de como conectar los componentes/containers, depedendemos de la infraestructura del vendor.
3. Kubernestes esta en la base de todo, existe un proyecto "knative" para deployar serverless sobre kubernetes.

## Knative

knative eventing usage pattern

## Demo

demostración de como se escala una app en serverless.
