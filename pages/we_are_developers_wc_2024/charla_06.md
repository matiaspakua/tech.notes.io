# Durable Execution: A revolutionary abstraction for building resilient applications

Representación del sistema solar.
Nosotros trabajamos con abstracciones, pero hay niveles de abstraccion. El problema aparece cuando se modelasn las abstracciones equivocadas o de manera equivocada.

Business Logic
Resilency
-------------------------------
Business Logic
Resilency
Resilency
Resilency


Microservices => complejidad distribuida
Monolitos => complejidda en un solo lugar
Architectura basada en eventos=> se pierde la logica
Scatered Logs. => se distribuye la logica de negocio
Error Handling => mal manejada, distribuida, que pasa con la logica distribuida.
Visibilidad y Debugging => solo notifica que pasan cosas n algun lugar

Events => son varialbes globales en sistemas distribuidaos. ATENCION.

## Durable Execution 

=><mark style="background: #FFF3A3A6;"> ejecución que no crashea por causas de fallas a nivel sistema</mark>.


## Caracteristicas:

1. Estado totalmente persistente.
2. Duración ilimitada
3. Duración ilimiatda de llamadas a API
4. Logica de Retry
5. Comunicación asincronica
6. Times Durables.

## implementación

Usando event-sourcring.
Ejemplo de un banco y transacciones, en un código se ejecuta una transferencia y en el evento donde se hace el deposito, el paso 5, justo falla. Usando un historial de eventos se puede recuperar la condicion inicial.

## Durable Execution platform

temporal.io

