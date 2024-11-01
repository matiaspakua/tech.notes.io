<style>
  .back-button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
</style>

<button class="back-button" onclick="window.location.href='https://matiaspakua.github.io/tech.notes.io'">All notes</button>

---
# 1. Introducción: Incepción

GitHub Repository:

[matiaspakua/biblioteca_tecnica: POC de un sistema de biblioteca técnica](https://github.com/matiaspakua/biblioteca_tecnica)

## Origen de la propuesta

Entre los consultores de la empresa, existe un gran interés por la formación y el desarrollo profesional en temas específicos y/o avanzados. Para ello, la lectura de libros técnicos con autores de referencia es una herramienta fundamental. Sin embargo, estos libros suelen ser de difícil acceso, ya que solo se pueden adquirir a través de Amazon o editoriales especializadas (O’Reilly, Wiley, etc.), no suelen estar traducidos al español y tienen un precio elevado (entre 30 y 60 euros).

La creación de una biblioteca técnica permitiría a los consultores acceder a información especializada y económica (los compraría KLAGAN), lo que resultaría en una mejora de las habilidades y en la calidad de los proyectos que se desarrollan.

Además, la creación de una biblioteca técnica es una inversión que se traduciría en un beneficio tangible para la empresa, mejorando la formación y el desarrollo profesional de los consultores, y por ende, la calidad de los servicios que se ofrecen.

## Reglas básicas de uso

1. Adquirir libros técnicos (desarrollo/programación, arquitectura, certificaciones, etc.) por medio de K-LAGAN y que serán de propiedad de K-LAGAN, para que sean utilizados por todos los empleados.
2. IMPORTANTE: debido a que son libros físicos, el problema que se genera es que empleados de otras locaciones no podrían acceder al beneficio.
3. Pedir un libro nuevo: tiene que haber al menos 3 interesados en un libro para poder realizar el pedido de compra a K-LAGAN. Se debe analizar bien el libro a solicitar, donde lo ideal es que sean libros que soporten el paso del tiempo en cierto grado o libros de referencia muy conocidos, de autores reconocidos, de manera tal que el contenido no pierda vigencia con el tiempo: ejemplo: El libro de Patrones de Diseño (de 1994) y aún vigente.
4. Si un libro es dañado, se le descontará el precio total a la persona que lo dañó (para poder reponerlo) y se volverá a comprar.
5. Al pedir un libro para leer, se le da un plazo de 20 días antes de devolverlo y no se puede volver a pedir de forma consecutiva, salvo que NO haya nadie más interesado en leer el libro en el periodo siguiente.
6. Los libros estarían disponibles en la oficina de KLAGAN y solamente desde ahí se podrían devolver y pedir prestados nuevamente.
7. Se deberá llevar un registro de quien solicitó un libro, cuando y quienes están en lista de espera para ese libro (se puede comenzar con un Excel inicialmente donde solo una persona de KLAGAN tenga permisos de escritura para llevar el registro de préstamos)
8. De esta lista preliminar, se envía una “encuesta” a todos los empleados de KLAGAN (Barcelona) y los 3 (tres) libros más votados serían los candidatos para comprar. 
9. Luego de 3 o 4 meses, repetir la encuesta, con los libros que quedaron sumados a otros sugeridos (quizás en la misma encuesta solicitar sugerencias).

## Descripción del negocio: Bibliotecas Técnica

[Descripción del caso de negocio]

La bibliotecas técnica es un herramienta de aprendizaje que pretende ser un punto de formación para las personas. A través de la adquisición de libros técnicos reconocidos y de interés en distintos campo/áreas de interés, se pretende que las personas tengan la oportunidad de solicitar a préstamo por un tiempo especificado (por ejemplo, 3 semanas) alguno de los libros de interés. 

La biblioteca se irá actualizado de acuerdo a la necesidad y solicitud de las personas, donde se pretende adquirir libros nuevo según esa necesidad. Este aspecto requiere que lo libros sean mantenidos en algún tipo de registro (titulo, autor y cualquier información relevante). Este registro deberá permitir incluir nuevos libros, modificar los existentes, por ejemplo, una corrección en el titulo, la eliminación de libros en los casos donde alguno sea dañado físicamente, perdido o destruido por alguna razón externa. El o las personas encargadas de la administración de la bibliotecas deberán tener la capacidad de acceder a toda ésta información, desde la lista de libros disponibles hasta los registros de prestamos y devoluciones a lo largo del tiempo.

Las personas interesadas en solicitar un préstamo de libro deberán tener la capacidad de poder solicitar la lista de libros disponible para elegir. Una persona que este interesada en un libro, debería poder solicitar un préstamo de uno de los libros disponibles y ese préstamo deberá quedar registrado, de igual manera el estado del libro solicitado deberá pasar de "libre" a "prestado" y otras personas que quieran solicitar dicho libro no deberían tener la capacidad de hacerlo hasta que dicho libro sea devuelto.

Las personas que han solicitado prestado un libro tendrán un plazo de 3 semanas (21 días) para tener el libro en su poder. Para mejorar la comunicación, se requiere algún mecanismo de "recordatorios" que permita notificar a los usuario 5 y 2 días antes del plazo de vencimiento del préstamo por medio de un correo electrónico. Luego de pasado dicho plazo, si el libro no ha sido devuelto, se deberá notificar a alguno de los administradores de la bibliotecas para que tome acción.

La devolución de libros la deberá realizar cada persona que haya solicitado un préstamo y al igual que los prestamos, las devoluciones también deberán quedar registradas a modo de registro histórico. Al momento de registrarse una devolución, el estado del libro deberá pasar de "prestado" a "libre" y con este cambio de estado, pasara a estar disponible para ser solicitado a préstamo por otras personas.

Tanto los registros de prestamos como devolución deberán contener como mínimo la siguiente información:

 - Fecha de préstamo o devolución
 - Nombre y apellido de la persona
 - Correo electrónico
 - Titulo del libro prestado o devuelto.

##  Análisis de Requisitos

### Descripción General

El sistema de biblioteca técnica permite a los empleados de una organización gestionar el préstamo y devolución de libros técnicos disponibles en la empresa, manteniendo un registro actualizado de los libros y facilitando la automatización de notificaciones y consultas.

### Objetivos

- **Facilitar la consulta y el préstamo de libros** a través de un sistema automatizado.
- **Automatizar las notificaciones** de vencimiento de préstamos y recordatorios.
- **Mantener el estado de los libros actualizado** para reflejar su disponibilidad en tiempo real.

## Requisitos Funcionales

1. **Consulta de Libros Disponibles**:
    - Los usuarios deben poder ver la lista de libros disponibles y su estado (libre/prestado).
    - Los libros prestados deben mostrar la fecha estimada de devolución.
2. **Solicitud de Préstamo de Libros**:
    - Los usuarios deben poder solicitar el préstamo de un libro.
    - El sistema debe actualizar automáticamente el estado del libro en "prestado" al procesar la solicitud.
3. **Registro de Devolución de Libros**:
    - Los usuarios deben poder registrar la devolución de un libro .
    - El sistema debe actualizar el estado del libro a "libre" y registrar la fecha de devolución.
4. **Notificaciones de Vencimiento**:
    - El sistema debe enviar correos de recordatorio a los usuarios cuando queden 5 y 2 días para la fecha de devolución de los libros.

## Requisitos No Funcionales

- **Disponibilidad**: El sistema debe estar accesible para los empleados a través de herramientas de uso gratuito (Formularios, hojas de calculo y correo electrónico).
- **Usabilidad**: Las interfaces (formularios y reportes) deben ser intuitivas y claras.
- **Automatización**: El uso de triggers debe reducir la intervención manual, garantizando un sistema fiable.

## Modelo Inicial de Casos de Uso

### Lista de actores identificados

Para el análisis de **casos de uso** en el sistema de biblioteca técnica, es fundamental identificar a los actores que interactúan con el sistema. Estos actores representan tanto a los **usuarios directos** como a los **sistemas o procesos automáticos** que participan en la ejecución de las funcionalidades del sistema.

### Actores Identificados en el Sistema de Biblioteca Técnica

1. **Usuario**:
   - **Descripción**: El usuario es el principal actor del sistema y representa a los empleados de la empresa que utilizan la biblioteca técnica para consultar, solicitar y devolver libros.
   - **Responsabilidades**:
     - Consultar la lista de libros disponibles y prestados.
     - Solicitar el préstamo de libros a través del formulario.
     - Registrar la devolución de libros mediante el formulario de devoluciones.
   - **Características**:
     - Tiene acceso a los formularios configurados para el sistema.
     - Recibe notificaciones por correo electrónico relacionadas con los plazos de devolución.
  
2. **Administrador**:
   - **Descripción**: El administrador tiene privilegios adicionales para supervisar el funcionamiento del sistema, gestionar los datos de los libros y atender las consultas o problemas que los usuarios puedan reportar.
   - **Responsabilidades**:
     - Mantener y actualizar la base de datos de libros  (agregar, editar y eliminar registros).
     - Acceder y revisar el historial completo de préstamos.
     - Configurar o ajustar el número de días permitidos para el préstamo (por ejemplo, 20 días), que afecta el cálculo de fechas de devolución.
   - **Características**:
     - Acceso total a las hojas de cálculo y los scripts para realizar ajustes en la configuración.
     - Puede monitorear el uso del sistema y generar reportes completos de la biblioteca.

3. **Sistema de Biblioteca (Automatizado)**:
   - **Descripción**: Este es un actor automático que representa la lógica de negocio. Actúa como un proceso en segundo plano que gestiona los eventos automáticos del sistema.
   - **Responsabilidades**:
     - Procesar automáticamente las solicitudes de préstamo y devolución enviadas por los usuarios a través de los formularios.
     - Calcular la fecha de devolución basada en la fecha del préstamo (Marca Temporal) y el número máximo de días configurado.
     - Enviar notificaciones automáticas por correo electrónico a los usuarios, alertando cuando quedan 5 y 2 días para la fecha de devolución.
     - Generar reportes de estado de la biblioteca (libros libres y prestados) y enviarlos a los administradores o usuarios que lo soliciten.
   - **Características**:
     - Es un actor no humano, responsable de mantener el sistema actualizado y libre de errores.

### Resumen de Actores

| Actor                  | Descripción                                                                                | Responsabilidades                                                                                                                  |
|------------------------|--------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| **Usuario**            | Empleado que usa el sistema para gestionar préstamos y devoluciones                        | Consultar libros, solicitar préstamos, registrar devoluciones, recibir notificaciones                                              |
| **Administrador**      | Persona encargada de supervisar y configurar el sistema                                    | Gestionar base de datos de libros, revisar historial de préstamos, configurar tiempo de préstamo, generar reportes                 |
| **Sistema de Biblioteca (Automatizado)** | Lógica de negocio que ejecuta funciones automáticas en segundo plano                     | Procesar solicitudes, calcular fechas de devolución, enviar notificaciones de vencimiento, generar reportes de estado de la biblioteca |

Con esta definición de los actores, podemos avanzar a **diagramar los casos de uso** y desarrollar los flujos de interacción entre cada actor y el sistema.


### Diagrama de Casos de Uso


![](../../images/dcu_general.png)

## Modelo Conceptual Inicial

* Diagrama de clases conceptuales principales*

## Glosario del Dominio

 * Términos clave del dominio del negocio


# 2. FASE DE ELABORACIÓN


- Modelo de Casos de Uso Refinado
    - Todos los casos de uso identificados
    - Especificaciones detalladas de casos de uso críticos
- Modelo de Dominio Detallado
    - Diagrama de clases conceptuales completo
    - Asociaciones y atributos
- Diagramas de Secuencia del Sistema
    - Para casos de uso principales
- Contratos de Operación
    - Precondiciones y postcondiciones
- Arquitectura Candidata
    - Vista general de la arquitectura
    - Patrones arquitectónicos seleccionados


# 3. FASE DE CONSTRUCCIÓN

- Diagramas de Interacción
	- Diagramas de secuencia detallados
	- Diagramas de comunicación
- Arquitectura Técnica
    - Decisiones tecnológicas
    - Frameworks y bibliotecas
- Documentación de APIs
    - Interfaces públicas
    - Contratos de servicios


# 4. FASE DE TRANSICIÓN

## Plan de Despliegue

- Estrategia de implementación
- 
Esta POC utiliza:

1. Google Sheet para mantener la base de datos de libros disponibles, registro de devoluciones y préstamos.
2. Google Forms con un formulario para solicitud de libros y otro form para devolución de libros.
3. Google APP Scrips para los CRUD automáticos disparados con los envios de formularios, notificación de devoluciones y otras validaciones internas.

![](../../images/c3_componentes_bilbioteca.png)

## Pruebas

- Plan de pruebas
- Casos de prueba
- Resultados de pruebas