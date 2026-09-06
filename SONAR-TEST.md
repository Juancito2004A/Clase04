# Baseline limpio para Zyrion

Este repositorio quedó refactorizado para nuevas pruebas de calidad y seguridad.

- Angular 19 + NestJS, CRUD de productos, login JWT, reportes y perfil.
- Secretos de JWT y base de datos salen de variables de entorno, no del código.
- Consultas parametrizadas, contraseñas con bcrypt, hash de usuario no expuesto en SELECT por defecto.
- Frontend con modelos compartidos y un único helper de errores HTTP.

El análisis de Zyrion (SonarScanner / Semgrep) debe correr sobre este árbol, no sobre findings fabricados.
