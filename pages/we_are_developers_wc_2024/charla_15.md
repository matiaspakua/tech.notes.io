# The Transformative impact of GenAI for software development and its implications for cybersecurity

## Contexto

La mejor forma de asegurar un producto es tratar de romperlo.
Uno de los principales problemas era automatizar pruebas y procesos.

Estado de la seguridad del software 2024

-> en la medida que el software evoluciona, el volumen de vulnerabilidades tambien va en aumento.
-> 70% tienen deudas de seguridad
-> 45% tiene deudas GRAVES de seguridad
->  2 de 10 empresas solamente pueden mantener un ritmo de FIX constante.

## Seguridad: por que es complejo?

-> crece la complejidad
-> microservicios
-> avance de features
-> el ecosistema de amenazas tambien es mayor


## Donde entra GenAI?

El problema con los LLM son los datos de entrenamiento, que tambien pueden tener vulnerabilidades (descubiertas y sin describir)

PAra que se puede usar ahora:

1. Generación de código, test, documentación.
2. uno de los usos más interesantes: <mark style="background: #FFF3A3A6;">Remediar vulnerabilidades de seguridad.</mark>
3. 41% del código generado con COPILOT tiene vulnerabilidades de seguridad.

## Implicaciones

1. Code reuse goes down
2. code velocitity goes up
3. Vulnerability density es SIMILAR!!

Entonces, usar LLM en el estado actual puede llevar a aumentar las vulnerabilidades.

Necesitamos wokflows (y pipelines) para remediar las vulnerabilidades más rápido y luego, usando LLM, reentrenar los modelos para entender como generar FIX. Por ejemplo, para agregar sanitizacion en el imput de los form de una web.

## Recomendaciones

Antes de aplicar LLM, revisar que modelo se usa, con que datos ha sido entrenado, licencias, revisar los fix de seguridad para ver si realmente son correctos.

Automatizar!! test, pipelines, etc.