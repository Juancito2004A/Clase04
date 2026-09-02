# Limpieza de calidad — Clase04

Las malas prácticas introducidas para la prueba de Zyrion/SonarScanner fueron **eliminadas**.

El código actual debe analizarse como una aplicación Angular + NestJS con:
- autenticación JWT + bcrypt
- CRUD de productos
- reportes de inventario con consultas parametrizadas
- perfil de usuario sin exposición de secretos

No quedan módulos `legacy-quality`, backdoors, `eval`, SQL concatenado ni credenciales hardcodeadas de demo.
