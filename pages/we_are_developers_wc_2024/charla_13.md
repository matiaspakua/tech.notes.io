# The Lifehackers guide to software architecture

## Beaware of the faith healer. 

2. Todas las decisiones tinene trade-off y downsides. Para lidiar con estos, se puede: lidiar con los trade.off
4. **Integración** es una parte integral de la arquitectura del software.
5. Que tan dificil puedde ser conectar dos sistemas? muchas tecnologias, comunicaciones, procesos, interacciones, componentes.
6. Ejemplo: Control de Flujo: QUEUEs

## Apply Divide-and-Conquer

Monolito. Y sus desventajas. A veces se mezcla con Legacy Modernization. 
Microservcioes traen algunas ventajas, por ejemplo, mantener la arquitectura limpia, pero tampoco es tan facil mantener muchos microservicios en una arquitectura limpia.

1. Apoyarse en los patrones.
2. integration pattern
3. conversation pattern

## Strive for loose coupling

Cuanto puedo cambiar de un componente sin afectar otros. 
Viene en michas dimensiones.

Topic-queur.chaining: un patron donde los mensajes entre consumer y producer se redirijen a los distrintos servicios a traves de colas y esas colas además están catagorizadas por topicos.

## Manage Failure

La principal causa de fallas es: RETRY LOGIC.
Dead-Letter Queue (DLQ)

Identificar
-> transient failure motigation
-> poison pill failure

Soluciones
-->Deduplication
--> Archive an reply

## Prepare for Success

vertical scaling
horizontal scalling
monolito vs microservicios

## No reinventar la rueda

Entender y aplicar estandares, por ejemplo, los status code de HTTP.