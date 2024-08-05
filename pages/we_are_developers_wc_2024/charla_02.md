# Architecture Antipattern

Stefan Tilkov, Goto conference. Achitecture antipatterns.

---

## Que son los antopatrones de architectura?

consecuencias negativas de aplicar una solución. Consecuencia de la evolución de las arquitecturas, decisiones, contexto, negocio.

---

## Caso de Estudio

Descripción del template o la estructura.

---

## Emotional (mis)attachement

preferencia de una tecnología, una misma solución que ya se conoce, un lenguaje de programación o estar casado con una tecnología en particular.

Estar en una zona de confort y querer solucionar todo con las herramientas que ya conoces.

---

## Misapplied Generecity

Una solución muy generica para ser usada para todo!! Termina siendo tan flexible que es compleja de desarrollar, usar, mejorar o corregir. 

Para prevenir: KISS, hacerlo 3 veces antes.

---

## Caso de Estudio: APP financiera

-> hacer una app para todos los mercados, de varios paises, termino siendo un problema muy complejo debido a que cada pais tiene sus procesos y leyes. Una APP generica, no resulto.

Solución BASE para mercados simples.
Solución CUSTOR para mercados complejos.

---

## Never touch a Running System

Sistemas legacy, complejos, etc.

Solución: escribir TEST, documentar lo que se pueda, hacer cambios muy chicos, tener una estrategia de rollback previa a aplicar los cambios.

---

## Caso de Estudio: Document Management System BANK.

Para estos casos:
 -> Automatizar pruebas,
 -> Documentar
-> reducir librerias
-> tener días de PATCH (patchdays)

---

## Caso de Estudio: FAT client swing application

App vieja en java, 4 millones LOC, 15 años, etc.

Solución: hacer pequeños Refactorings.

---

## Tips

-> Test, importante
-> Experimentar.
-> documentar
-> CI/CD armar pipelines.
-> refactorings.
-> evolucionaty architecture.

---

## Cargo Culture

Usar conceptos sin conocer el porque y como?, por ejemplo, usar el modelo de spotify. Otro ejemplo usar microservicios para todo.


---

## Referencias:


https://github.com/innoq/architecture-antipatterns

https://architecture-antipatterns.tech/



