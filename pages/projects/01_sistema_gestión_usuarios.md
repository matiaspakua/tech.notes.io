# Proyecto 1: Sistema de Gestión de Usuarios con Autenticación y Autorización (OAuth2/Spring Security)



## **Requisitos de Negocio (Alto Nivel)**

1. **Gestión de Usuarios**:
   - **Registro de Usuarios**: El sistema debe permitir que los usuarios se registren con una dirección de correo electrónico y contraseña, o mediante un proveedor de autenticación externo (OAuth2), como Google o Facebook.
   - **Inicio de Sesión**: Los usuarios deben poder iniciar sesión usando sus credenciales (usuario y contraseña) o utilizando autenticación social a través de OAuth2.
   - **Perfil de Usuario**: Cada usuario debe tener un perfil donde pueda actualizar información personal, como nombre, dirección de correo electrónico, foto de perfil, etc.

2. **Autenticación y Autorización**:
   - **Autenticación Segura**: El sistema debe garantizar que solo los usuarios autenticados puedan acceder a áreas protegidas de la aplicación. La autenticación será gestionada mediante JWT (JSON Web Tokens) emitidos tras un inicio de sesión exitoso.
   - **Roles y Permisos**: Los usuarios deben ser asignados a diferentes roles, como "Usuario", "Administrador", y "SuperAdministrador", con diferentes niveles de permisos en función de su rol.
   - **Protección de Rutas**: Las rutas de la API deben estar protegidas según los roles y permisos. Los usuarios normales no deben acceder a las funcionalidades reservadas para los administradores.

3. **Autenticación Social (OAuth2)**:
   - **Integración con Proveedores Externos**: El sistema debe permitir a los usuarios autenticarse a través de proveedores externos como Google y Facebook, utilizando el protocolo OAuth2.
   - **Gestión de Tokens**: El sistema debe gestionar de manera segura los tokens de acceso de los proveedores externos y garantizar su correcta expiración y renovación.

4. **Gestión de Sesiones y Seguridad**:
   - **Tiempo de Expiración del Token**: Los tokens de sesión deben tener un tiempo de expiración para aumentar la seguridad, y el sistema debe manejar la renovación de tokens cuando sea necesario.
   - **Recuperación de Contraseña**: El sistema debe permitir a los usuarios solicitar la recuperación de su contraseña en caso de que la olviden, utilizando un enlace enviado por correo electrónico.
   - **Bloqueo de Cuenta tras Intentos Fallidos**: Implementar una funcionalidad que bloquee temporalmente la cuenta después de un número determinado de intentos fallidos de inicio de sesión.

5. **Auditoría y Monitoreo**:
   - **Registro de Actividades**: El sistema debe registrar actividades críticas como intentos de inicio de sesión, cambios de contraseñas, cambios en roles y permisos, etc., para futuras auditorías.
   - **Alertas de Seguridad**: Notificar al administrador en caso de actividades sospechosas, como múltiples intentos fallidos de inicio de sesión.

6. **Escalabilidad y Rendimiento**:
   - **Alta Disponibilidad**: El sistema debe estar diseñado para manejar una alta concurrencia de usuarios simultáneos sin comprometer el rendimiento.
   - **Optimización de la Base de Datos**: La base de datos debe estar optimizada para consultas rápidas y seguras de usuarios y roles.

7. **Interfaz de Usuario (UI)**:
   - **Panel de Administración**: Un panel centralizado para que los administradores gestionen usuarios, roles y permisos. Debe ser accesible únicamente para los usuarios con permisos administrativos.
   - **Flujo de Registro e Inicio de Sesión Simple**: La interfaz debe ser clara y fácil de usar, asegurando una experiencia fluida para el usuario final.

#### **Siguientes Pasos para el Análisis y Diseño Orientado a Objetos**
Estos requisitos de negocio proporcionan el marco para iniciar el proceso de análisis y diseño orientado a objetos. Los siguientes pasos incluirían:

- **Identificar las clases principales**: Como `Usuario`, `Rol`, `Permiso`, `Token`, y `Administrador`.
- **Diseñar los casos de uso**: Modelar casos de uso para escenarios clave como registro, inicio de sesión, gestión de roles, etc.
- **Diagramas de secuencia**: Crear diagramas de secuencia para los flujos de autenticación, autorización y registro de usuarios.
- **Modelado de la Base de Datos**: Definir tablas como `Usuarios`, `Roles`, `Permisos` y relaciones entre ellas.