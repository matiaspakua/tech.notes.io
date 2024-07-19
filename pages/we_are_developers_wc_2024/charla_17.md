# Micro-Frontends discovery

SPA es deployada a producción y luego los cliente la ven.
CSR-micro frontend deployment
static vs dinamic imports
module federation static import
SErvice discovery pattern => microservices.io

## Challenges

1. discover new version
2. re-risk the deployment
3. fallback alternatives

como?

blue-gree deployment
canary release

## Problema y solución

como implementar todas las features en un application shell?

json-schema => acá se defien la URL a la nueva versión, dependencias y la URL a la versión de Fall-back y los ambientes de integración con las versiones de los componentes que se quieren deployar.

Esta configuración debe ser cargada antes que nada, lo primero para que sea reconocida y cargada.

https://github.com/awslabs/frontend-discovery
https://github.com/awslabs/frontend-discovery-service

