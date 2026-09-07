# Informe de hallazgos para corrección

Documento orientado a corregir problemas en el código. Cada hallazgo indica dónde está, qué ocurre, cómo afecta y cómo corregirlo.

## Contexto

| Campo | Valor |
| --- | --- |
| Proyecto | Proyecto 65a0baf1-1627-4fba-8a7c-cf8572fd3d41 |
| Workspace | Workspace activo |
| Repositorio | zyrion/app |
| Rama |  |
| Tarea | e1795bae-b690-454f-a0a5-fbba696de82d · levantar observaciones |
| Responsable | JUANCITO ALEXIS BLAS PUENTE |
| Último análisis | Pendiente |
| Generado | 7/9/2026, 15:25:23 |
| Estado de la tarea | Pendiente |

## Resumen

| Severidad | Cantidad |
| --- | ---: |
| Críticos | 1 |
| Altos | 9 |
| Medios | 30 |
| Bajos | 0 |
| Info | 1 |
| **Total** | **41** |

---

## Hallazgo 001: Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed.

| | |
| --- | --- |
| Severidad | Crítica |
| Estado | Pendiente |
| Categoría | ARCHITECTURE |

### Qué es el problema

Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed.

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en backend/src/common/http-exception.filter.ts:15, corrige el patrón reportado en «Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed.» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`backend/src/common/http-exception.filter.ts:15` (Arquitectura)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed.» en backend/src/common/http-exception.filter.ts:15.

### Cómo afecta

Puede exponer datos sensibles, romper autenticación/autorización o permitir abuso remoto.

---

## Hallazgo 002: Replace this shell form with exec form.

| | |
| --- | --- |
| Severidad | Alta |
| Estado | Pendiente |
| Categoría | QUALITY |

### Qué es el problema

Replace this shell form with exec form.

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en backend/Dockerfile:16, corrige el patrón reportado en «Replace this shell form with exec form.» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`backend/Dockerfile:16` (Calidad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Replace this shell form with exec form.» en backend/Dockerfile:16.

### Cómo afecta

Puede exponer datos sensibles, romper autenticación/autorización o permitir abuso remoto.

---

## Hallazgo 003: Detected a Generic API Key, potentially exposing access to various services and sensitive operations.

| | |
| --- | --- |
| Severidad | Alta |
| Estado | Pendiente |
| Categoría | SECRET |

### Qué es el problema

Detected a Generic API Key, potentially exposing access to various services and sensitive operations.

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en backend/README.md:5, corrige el patrón reportado en «Detected a Generic API Key, potentially exposing access to various services and sensitive operations.» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`backend/README.md:5` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Detected a Generic API Key, potentially exposing access to various services and sensitive operations.» en backend/README.md:5.

### Cómo afecta

Puede exponer datos sensibles, romper autenticación/autorización o permitir abuso remoto.

---

## Hallazgo 004: Extract this nested ternary operation into an independent statement.

| | |
| --- | --- |
| Severidad | Alta |
| Estado | Pendiente |
| Categoría | QUALITY |

### Qué es el problema

Extract this nested ternary operation into an independent statement.

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en backend/src/common/http-exception.filter.ts:39, corrige el patrón reportado en «Extract this nested ternary operation into an independent statement.» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`backend/src/common/http-exception.filter.ts:39` (Calidad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Extract this nested ternary operation into an independent statement.» en backend/src/common/http-exception.filter.ts:39.

### Cómo afecta

Puede exponer datos sensibles, romper autenticación/autorización o permitir abuso remoto.

---

## Hallazgo 005: @angular/common@19.2.25: @angular/common: Weak 32-Bit Cache Key Hashing in `HttpTransferCache` Leading to Cross-Request Data Leakage and State Poisoning

| | |
| --- | --- |
| Severidad | Alta |
| Estado | Pendiente |
| Categoría | DEPENDENCY |

### Qué es el problema

@angular/common@19.2.25: @angular/common: Weak 32-Bit Cache Key Hashing in `HttpTransferCache` Leading to Cross-Request Data Leakage and State Poisoning

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/package-lock.json:11, corrige el patrón reportado en «@angular/common@19.2.25: @angular/common: Weak 32-Bit Cache Key Hashing in `HttpTransferCache` Leading to Cross-Request Data Leakage and State Poisoning» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/package-lock.json:11` (Dependencias)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «@angular/common@19.2.25: @angular/common: Weak 32-Bit Cache Key Hashing in `HttpTransferCache` Leading to Cross-Request Data Leakage and State Poisoning» en frontend/package-lock.json:11.

### Cómo afecta

Puede exponer datos sensibles, romper autenticación/autorización o permitir abuso remoto.

---

## Hallazgo 006: @angular/common@19.2.25: @angular/common: Angular @angular/common: Denial of Service via crafted date format string

| | |
| --- | --- |
| Severidad | Alta |
| Estado | Pendiente |
| Categoría | DEPENDENCY |

### Qué es el problema

@angular/common@19.2.25: @angular/common: Angular @angular/common: Denial of Service via crafted date format string

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/package-lock.json:11, corrige el patrón reportado en «@angular/common@19.2.25: @angular/common: Angular @angular/common: Denial of Service via crafted date format string» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/package-lock.json:11` (Dependencias)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «@angular/common@19.2.25: @angular/common: Angular @angular/common: Denial of Service via crafted date format string» en frontend/package-lock.json:11.

### Cómo afecta

Puede exponer datos sensibles, romper autenticación/autorización o permitir abuso remoto.

---

## Hallazgo 007: @angular/common@19.2.25: @angular/common: Angular: Cross-Request Response Reuse and State Poisoning in HttpTransferCache

| | |
| --- | --- |
| Severidad | Alta |
| Estado | Pendiente |
| Categoría | DEPENDENCY |

### Qué es el problema

@angular/common@19.2.25: @angular/common: Angular: Cross-Request Response Reuse and State Poisoning in HttpTransferCache

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/package-lock.json:11, corrige el patrón reportado en «@angular/common@19.2.25: @angular/common: Angular: Cross-Request Response Reuse and State Poisoning in HttpTransferCache» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/package-lock.json:11` (Dependencias)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «@angular/common@19.2.25: @angular/common: Angular: Cross-Request Response Reuse and State Poisoning in HttpTransferCache» en frontend/package-lock.json:11.

### Cómo afecta

Puede exponer datos sensibles, romper autenticación/autorización o permitir abuso remoto.

---

## Hallazgo 008: @angular/compiler@19.2.25: @angular/compiler: @angular/core: Angular: Cross-Site Scripting via internationalization event handlers

| | |
| --- | --- |
| Severidad | Alta |
| Estado | Pendiente |
| Categoría | DEPENDENCY |

### Qué es el problema

@angular/compiler@19.2.25: @angular/compiler: @angular/core: Angular: Cross-Site Scripting via internationalization event handlers

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/package-lock.json:12, corrige el patrón reportado en «@angular/compiler@19.2.25: @angular/compiler: @angular/core: Angular: Cross-Site Scripting via internationalization event handlers» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/package-lock.json:12` (Dependencias)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «@angular/compiler@19.2.25: @angular/compiler: @angular/core: Angular: Cross-Site Scripting via internationalization event handlers» en frontend/package-lock.json:12.

### Cómo afecta

Puede exponer datos sensibles, romper autenticación/autorización o permitir abuso remoto.

---

## Hallazgo 009: @angular/core@19.2.25: @angular/compiler: @angular/core: Angular: Cross-Site Scripting via internationalization event handlers

| | |
| --- | --- |
| Severidad | Alta |
| Estado | Pendiente |
| Categoría | DEPENDENCY |

### Qué es el problema

@angular/core@19.2.25: @angular/compiler: @angular/core: Angular: Cross-Site Scripting via internationalization event handlers

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/package-lock.json:13, corrige el patrón reportado en «@angular/core@19.2.25: @angular/compiler: @angular/core: Angular: Cross-Site Scripting via internationalization event handlers» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/package-lock.json:13` (Dependencias)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «@angular/core@19.2.25: @angular/compiler: @angular/core: Angular: Cross-Site Scripting via internationalization event handlers» en frontend/package-lock.json:13.

### Cómo afecta

Puede exponer datos sensibles, romper autenticación/autorización o permitir abuso remoto.

---

## Hallazgo 010: @angular/core@19.2.25: @angular/core: Angular Client Hydration DOM Clobbering & Response-Cache Poisoning

| | |
| --- | --- |
| Severidad | Alta |
| Estado | Pendiente |
| Categoría | DEPENDENCY |

### Qué es el problema

@angular/core@19.2.25: @angular/core: Angular Client Hydration DOM Clobbering & Response-Cache Poisoning

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/package-lock.json:13, corrige el patrón reportado en «@angular/core@19.2.25: @angular/core: Angular Client Hydration DOM Clobbering & Response-Cache Poisoning» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/package-lock.json:13` (Dependencias)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «@angular/core@19.2.25: @angular/core: Angular Client Hydration DOM Clobbering & Response-Cache Poisoning» en frontend/package-lock.json:13.

### Cómo afecta

Puede exponer datos sensibles, romper autenticación/autorización o permitir abuso remoto.

---

## Hallazgo 011: qs@6.15.3: qs: qs: Denial of Service via improper validation in stringify function

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | DEPENDENCY |

### Qué es el problema

qs@6.15.3: qs: qs: Denial of Service via improper validation in stringify function

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en backend/package-lock.json:4226, corrige el patrón reportado en «qs@6.15.3: qs: qs: Denial of Service via improper validation in stringify function» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`backend/package-lock.json:4226` (Dependencias)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «qs@6.15.3: qs: qs: Denial of Service via improper validation in stringify function» en backend/package-lock.json:4226.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 012: qs@6.15.3: qs: qs: Denial of Service via array limit bypass in query string parsing

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | DEPENDENCY |

### Qué es el problema

qs@6.15.3: qs: qs: Denial of Service via array limit bypass in query string parsing

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en backend/package-lock.json:4226, corrige el patrón reportado en «qs@6.15.3: qs: qs: Denial of Service via array limit bypass in query string parsing» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`backend/package-lock.json:4226` (Dependencias)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «qs@6.15.3: qs: qs: Denial of Service via array limit bypass in query string parsing» en backend/package-lock.json:4226.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 013: Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | QUALITY |

### Qué es el problema

Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en backend/src/common/http-exception.filter.ts:39, corrige el patrón reportado en «Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`backend/src/common/http-exception.filter.ts:39` (Calidad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.» en backend/src/common/http-exception.filter.ts:39.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 014: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en backend/src/products/products.service.ts:7, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`backend/src/products/products.service.ts:7` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en backend/src/products/products.service.ts:7.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 015: Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | QUALITY |

### Qué es el problema

Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en backend/src/products/products.service.ts:100, corrige el patrón reportado en «Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`backend/src/products/products.service.ts:100` (Calidad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.» en backend/src/products/products.service.ts:100.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 016: @angular/compiler@19.2.25: @angular/compiler: Angular: Two-Way Property Binding Sanitization Bypass (XSS)

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | DEPENDENCY |

### Qué es el problema

@angular/compiler@19.2.25: @angular/compiler: Angular: Two-Way Property Binding Sanitization Bypass (XSS)

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/package-lock.json:12, corrige el patrón reportado en «@angular/compiler@19.2.25: @angular/compiler: Angular: Two-Way Property Binding Sanitization Bypass (XSS)» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/package-lock.json:12` (Dependencias)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «@angular/compiler@19.2.25: @angular/compiler: Angular: Two-Way Property Binding Sanitization Bypass (XSS)» en frontend/package-lock.json:12.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 017: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/login/login.component.ts:19, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/login/login.component.ts:19` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/login/login.component.ts:19.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 018: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/login/login.component.ts:20, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/login/login.component.ts:20` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/login/login.component.ts:20.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 019: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/login/login.component.ts:45, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/login/login.component.ts:45` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/login/login.component.ts:45.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 020: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/login/login.component.ts:46, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/login/login.component.ts:46` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/login/login.component.ts:46.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 021: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/login/login.component.ts:54, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/login/login.component.ts:54` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/login/login.component.ts:54.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 022: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/login/login.component.ts:55, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/login/login.component.ts:55` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/login/login.component.ts:55.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 023: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/login/login.component.ts:68, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/login/login.component.ts:68` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/login/login.component.ts:68.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 024: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/login/login.component.ts:88, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/login/login.component.ts:88` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/login/login.component.ts:88.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 025: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/login/login.component.ts:93, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/login/login.component.ts:93` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/login/login.component.ts:93.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 026: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/login/login.component.ts:98, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/login/login.component.ts:98` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/login/login.component.ts:98.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 027: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/login/login.component.ts:106, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/login/login.component.ts:106` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/login/login.component.ts:106.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 028: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/login/login.component.ts:108, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/login/login.component.ts:108` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/login/login.component.ts:108.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 029: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/products/products.component.ts:20, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/products/products.component.ts:20` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/products/products.component.ts:20.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 030: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/products/products.component.ts:36, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/products/products.component.ts:36` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/products/products.component.ts:36.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 031: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/products/products.component.ts:51, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/products/products.component.ts:51` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/products/products.component.ts:51.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 032: Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | QUALITY |

### Qué es el problema

Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/products/products.component.ts:79, corrige el patrón reportado en «Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/products/products.component.ts:79` (Calidad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.» en frontend/src/app/components/products/products.component.ts:79.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 033: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/profile/profile.component.ts:17, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/profile/profile.component.ts:17` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/profile/profile.component.ts:17.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 034: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/reports/reports.component.ts:17, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/reports/reports.component.ts:17` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/reports/reports.component.ts:17.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 035: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/reports/reports.component.ts:18, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/reports/reports.component.ts:18` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/reports/reports.component.ts:18.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 036: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/reports/reports.component.ts:21, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/reports/reports.component.ts:21` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/reports/reports.component.ts:21.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 037: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/reports/reports.component.ts:31, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/reports/reports.component.ts:31` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/reports/reports.component.ts:31.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 038: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/components/reports/reports.component.ts:47, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/components/reports/reports.component.ts:47` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/components/reports/reports.component.ts:47.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 039: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/services/auth.service.ts:9, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/services/auth.service.ts:9` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/services/auth.service.ts:9.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 040: Possible hardcoded credential or API key

| | |
| --- | --- |
| Severidad | Media |
| Estado | Pendiente |
| Categoría | SECURITY |

### Qué es el problema

Possible hardcoded credential or API key

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en frontend/src/app/services/auth.service.ts:10, corrige el patrón reportado en «Possible hardcoded credential or API key» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`frontend/src/app/services/auth.service.ts:10` (Seguridad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «Possible hardcoded credential or API key» en frontend/src/app/services/auth.service.ts:10.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---

## Hallazgo 041: No Playwright config found in repository

| | |
| --- | --- |
| Severidad | Info |
| Estado | Pendiente |
| Categoría | TEST |

### Qué es el problema

No Playwright config found in repository

### Cómo corregirlo

Pasos recomendados:
1. Revisa el código en —, corrige el patrón reportado en «No Playwright config found in repository» y valida con pruebas antes de volver a analizar.

### Dónde está el problema

`—` (Calidad)

### Código afectado

No hay fragmento real persistido para este hallazgo. Reanaliza el proyecto para capturar el código del repositorio.

### Qué está pasando

Se detectó el problema «No Playwright config found in repository» en —.

### Cómo afecta

Aumenta el riesgo técnico y el costo de mantenimiento del módulo afectado.

---
