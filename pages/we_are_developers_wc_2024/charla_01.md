# Evolutionary Architecture: the art of making decisions

![](../../images/sagrada_familia_columns.jpg)

## Introducción

"Sagrada familia". la originalidad consiste en regresar a los orígenes. Gaudi Quote.

Que aprender de la arquitectura clásica. Tenemos más de 12.000 años de historia construyendo estructuras físicas.

Legos => sirven para crear representaciones físicas de "ideas", software es similar a los legos pero sin el aspecto físico.


## Arquitectura evolutiva 

El negocio siempre quiere cambios y los quiere ahora y baratos. => "**decisiones**". 

Las grandes preguntas de la ingeniería de software:

1. Como <mark style="background: #FFF3A3A6;">hacer planes a mediano/largo plazo</mark>, cuando las cosas cambian en el transcurso del tiempo.
2. Como puedo <mark style="background: #BBFABBA6;">prevenir que el producto se degrade</mark>, con el transcurso del tiempo.

Como responder a éstas preguntas?

## Framework para toma de decisiones

Del Libro: The software architecture elevator. Gregor Hohpe. 

**Poner foco en decisiones pertinentes**

1. Decisiones no triviales.
2. Deben tener un downside
3. Meaningful.



--> <mark style="background: #FFF3A3A6;">SIMPLICIDAD</mark> como el verdadero NORTE.
--> Hacer cosas complejas no siempre es la mejor opción.
--> Necesito ver la solución claramente. Entendiendo las constraints del contexto.
--> la incertidubre genera perdida de confianza, como eliminarla: <mark style="background: #FFF3A3A6;">EXPERIMENTANDO</mark>.

**Ejemplo**: Experimento de Gaudi con los pesos dados vueltas para modelar la fisica y pesos de la iglesia. Proof-of-concepts de las estatuas.

--> POC hacerlo fuera de tu dominio de negocio. 
--> Evitar creatividad innecesaria, usar los elementos más básicos disponibles.
--> como hacer cosas complejas => <mark style="background: #FFF3A3A6;">DOCUMENTACIÓN</mark>.
--> Como documentar: <mark style="background: #FFF3A3A6;">DIAGRAMAS</mark>.
--> C4 model.
--> ADR or SAD -> lo más sencillo son ADR.

## Decisiones Anti-Patterns

* No mandarlas por e-mails.
* Hacer decisiones que sean fáciles de volver-atrás.
* Hacer algo, una parte y dejarla de base para el resto. Que esa decisión quede aislada en una parte.
