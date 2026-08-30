# Prueba controlada de calidad — SonarQube / Zyrion QAaaS

Este documento describe problemas de **calidad / mantenibilidad** introducidos deliberadamente en el proyecto **Clase04** (Angular + NestJS) para validar el flujo:

```
Repositorio → Zyrion → engine-sonar → SonarQube
  → issueCount > 0
  → Zyrion recibe los issues
  → se muestran en Calidad
  → se contabilizan en el análisis
  → GitHub Check muestra el resumen
```

No se modificó Zyrion, engine-sonar, Semgrep ni SonarQube.
No se insertaron findings en base de datos.
Los issues deben provenir **únicamente** del análisis estático real.

## Configuración de Sonar en este repositorio

No existe `sonar-project.properties`, `sonar-project.json` ni perfil custom en el repo.

Por tanto, se asume el perfil por defecto **Sonar way** de SonarJS/TypeScript (el que usa SonarQube cuando no hay override de proyecto).

Las claves de regla se indican como **esperadas** según las reglas públicas de SonarJS/TypeScript. Si el perfil de la instancia Zyrion/SonarQube está personalizado, el identificador exacto puede variar; el tipo de hallazgo (code smell / mantenibilidad) no.

## Problemas introducidos

| # | Archivo | Línea aprox. | Problema | Regla esperada (Sonar way) |
|---|---|---|---|---|
| 1 | `backend/src/products/products.service.ts` | 90–186 | Función `classifyStockLevel` con anidamiento excesivo de `if`/`else if` (complejidad cognitiva > 15) | `typescript:S3776` Cognitive Complexity |
| 2 | `backend/src/products/products.service.ts` | 188–208 | Métodos `normalizeLabel` y `canonicalizeLabel` con implementación idéntica (código duplicado) | `typescript:S4144` Identical implementations |
| 3 | `backend/src/health/health.controller.ts` | 12 | Variable local no usada declarada con `var` | `typescript:S1481` Unused local + `typescript:S3504` Use `let`/`const` |
| 4 | `frontend/src/app/components/products/products.component.ts` | 37–41, 128–134 | `if` anidados colapsables, literales booleanos redundantes y `if/else` que solo devuelve un booleano | `typescript:S1066` Collapsible if + `typescript:S1125` Boolean literals + `typescript:S1126` Return boolean directly |
| 5 | `frontend/src/app/services/product.service.ts` | 34–38 | Operador ternario anidado y ramas de `if` con la misma implementación | `typescript:S3358` Nested ternary + `typescript:S3923` / `typescript:S1871` Identical branches |

### Hallazgos adicionales que el mismo código puede disparar

Estos no se cuentan como problemas “extra” inventados; son consecuencias del mismo código y refuerzan `issueCount > 0`:

| Archivo | Línea aprox. | Por qué Sonar suele marcarlo |
|---|---|---|
| `backend/src/products/products.service.ts` | 67–86 | Ambas ramas de `serialize` son idénticas; `classification.length >= 0` es siempre verdadero (`S3923`, `S2589`) |
| `backend/src/products/products.service.ts` | 124, 130 | Condiciones redundantes (`price > 1000 \|\| price > 5000`, `price > 100 && price > 50`) (`S2589`) |
| `backend/src/products/products.service.ts` | 83, 103, 117 (original) / 218, 238, 252 | El literal `'Product not found'` se repite 3 veces (`S1192`, umbral típico = 3) |
| `frontend/src/app/components/products/products.component.ts` | 54 | Ternario con ambas ramas iguales (`S3923`) |

## Por qué cada problema es detectable (y no es un finding de Semgrep)

1. **Complejidad cognitiva** — SonarJS cuenta `+1` por cada `if`/`else if` y un extra por anidamiento. El umbral por defecto de `S3776` es **15**. `classifyStockLevel` supera ese umbral de forma holgada. Semgrep no reporta complejidad cognitiva.
2. **Métodos idénticos** — `S4144` compara el cuerpo de métodos del mismo archivo. Ambos helpers tienen el mismo control flow y los mismos retornos. No hay patrón de seguridad.
3. **Variable no usada + `var`** — `unusedHealthMarker` no se lee; `var` está deprecado frente a `let`/`const`. Son reglas de mantenibilidad, no de secretos ni de `eval`.
4. **Control de flujo simplificable** — `if (a) { if (b === true) }` se colapsa (`S1066`); `=== true` / `=== false` es redundante (`S1125`); `if (cond) return true; else return false` es `S1126`. El CRUD no cambia: `products` nunca es `null` y `loading` es `true` al entrar al callback.
5. **Ternario anidado** — `S3358` está activo en Sonar way. Las dos ramas HTTP construyen la misma URL, así que el detalle de producto sigue funcionando.

No se usaron `eval`, API keys, passwords, secretos ni `document.write`. Esos patrones suelen ser de Semgrep (seguridad), no el objetivo de esta prueba.

## Contrato que no se altera

- `GET /health` sigue devolviendo `{ status: 'ok', database: 'connected' }`.
- El JSON de productos conserva los mismos campos (`id`, `name`, `description`, `price`, `stock`, `createdAt`, `updatedAt`).
- Las URLs del CRUD no cambian.
- No hay dependencias nuevas.
- No hay credenciales reales.

## Resultado esperado del análisis

Tras un análisis real de SonarQube sobre este commit/árbol:

| Indicador | Valor esperado |
|---|---|
| Estado del scanner | éxito (análisis completado) |
| `issueCount` | **> 0** |
| Tipo predominante | code smells / maintainability (no solo vulnerabilidades Semgrep) |
| Estado Zyrion (si aplica) | `ANALYSIS_SUCCESS_WITH_ISSUES` o equivalente |
| Calidad | findings visibles, no fabricados |
| Production Ready Score | debe reflejar issues de calidad > 0 |
| GitHub Check | resumen de resultados, no el detalle crudo de cada issue |

La prueba **falla** si SonarQube devuelve `issueCount = 0`. En ese caso Zyrion no debe inventar findings.

## Cómo verificar localmente (sin tocar el pipeline)

```bash
npm --prefix backend install
npm --prefix frontend install
npm --prefix backend run build
npm --prefix frontend run build
npm test
```

Los problemas de calidad **no deben corregirse** después del análisis: son el oráculo de la prueba.

## Contenido web adicional (login, reportes, perfil)

Se ampliaron pantallas reales del sistema para que Semgrep (seguridad) y SonarQube (calidad) tengan más superficie. El CRUD de productos no se reemplazó.

### Nuevas rutas

- `/login` — panel de cuenta demo + malas prácticas de auth
- `/reports` — KPIs de inventario + búsqueda
- `/profile` — sesión, token y códigos de recuperación
- `GET /api/reports/summary`
- `GET /api/reports/search?q=`
- `GET /api/auth/me`

### Seguridad esperada (Semgrep)

| # | Archivo | Problema |
|---|---|---|
| 1 | `frontend/.../login.component.ts` | Contraseña e API keys hardcodeadas; password en `localStorage`; `innerHTML`; `document.write`; `eval` |
| 2 | `backend/src/auth/auth.service.ts` | Backdoor `admin@clase04.local` / `Clase04Admin!`; hash MD5; secret en el JWT |
| 3 | `backend/src/users/users.service.ts` | SQL concatenado; `NODE_TLS_REJECT_UNAUTHORIZED = '0'` |
| 4 | `backend/src/reports/reports.service.ts` | `LIKE '%" + term + "%'` (SQL injection) |
| 5 | `frontend/.../profile.component.ts` | Token y última contraseña visibles en pantalla |

Las credenciales demo son falsas y solo sirven para esta prueba.

### Calidad extra esperada (Sonar)

| Archivo | Problema | Regla esperada |
|---|---|---|
| `login.component.ts` `buildSupportHint` | Ternario anidado + booleanos redundantes | S3358, S1125 |
| `reports.service.ts` | `var` no usado, ramas idénticas, métodos duplicados | S3504, S1481, S3923, S4144 |
| `reports.component.ts` | `if` colapsables, ternario anidado, `if/else` booleano | S1066, S3358, S1126 |
| `profile.component.ts` | Métodos idénticos, ternario anidado, `if` colapsables | S4144, S3358, S1066 |
