# CRUD Angular + NestJS

## 1. Nombre

`crud-angular-nest`

## 2. Objetivo

Aplicación CRUD de productos usada como proyecto de prueba PaaS. Implementa la misma funcionalidad de negocio que los otros stacks del workspace.

## 3. Stack

- Frontend: Angular
- Backend: NestJS + TypeScript
- Base de datos: PostgreSQL
- Persistencia: TypeORM (integración estándar de NestJS)
- Package manager: npm

## 4. Arquitectura

```
Stack Angular + NestJS/
├── frontend/          Angular
├── backend/           NestJS (Module, Controller, Service, DTO, ValidationPipe)
├── docker-compose.yml
├── .env.example
├── project-metadata.yaml
└── README.md
```

## 5. Requisitos

- Node.js 20+
- npm
- Docker y Docker Compose
- PostgreSQL 16

## 6. Instalación

```bash
copy .env.example .env
npm --prefix backend install
npm --prefix frontend install
```

## 7. Variables de entorno

- `PORT` / `BACKEND_PORT`
- `FRONTEND_PORT`
- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
- `NG_APP_API_URL`

## 8. Base de datos

Tabla `products` con la misma estructura lógica de Product. TypeORM sincroniza el esquema al iniciar y existe `backend/src/db/001_create_products.sql` como migración de referencia.

## 9. Migraciones

La entidad `Product` crea/actualiza la tabla al arrancar el backend (`synchronize: true`). El archivo SQL documenta el esquema esperado.

## 10. Seed

Al iniciar, si la tabla está vacía, se insertan 5 productos:

1. Laptop Lenovo
2. Mouse Logitech
3. Teclado mecánico
4. Monitor 24 pulgadas
5. Disco SSD

## 11. Ejecución local

```bash
npm --prefix backend start
npm --prefix frontend start
```

## 12. Docker

```bash
docker compose up -d --build
```

## 13. Endpoints

- `GET /api`
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`

## 14. Health check

`GET /health`

```json
{
  "status": "ok",
  "database": "connected"
}
```

Consulta realmente PostgreSQL.

## 15. Tests

```bash
npm test
```

## 16. Build

```bash
npm run build
```

- `buildCommand`: `npm run build`
- `startCommand`: `npm start`
- `testCommand`: `npm test`

## 17. Puertos

| Servicio   | Puerto |
|------------|--------|
| Frontend   | 3010   |
| Backend    | 3011   |
| PostgreSQL | 5433   |

## 18. Troubleshooting

- Si el backend no arranca, confirme que PostgreSQL responde en `DB_PORT`.
- Si Angular no lista productos, verifique `environment.apiUrl` / `NG_APP_API_URL`.
- Los datos persisten en el volumen `postgres_data`.
