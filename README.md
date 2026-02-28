# Hispania Client

Cliente Nostr para contenido de formato largo en español — basado en NIP-23.

Inspirado en la topología editorial de LessWrong / Alignment Forum: artículos largos, comentarios anidados, curación comunitaria.

## Stack

- React 18 + Chakra UI
- nostr-tools (NIP-07, NIP-23, NIP-57)
- Autenticación vía extensión de navegador (NIP-07)

## Desarrollo local

```bash
yarn install
yarn start
```

## Arquitectura

- **Feed principal**: artículos NIP-23 ordenados por relevancia/tiempo
- **Artículo**: renderizado Markdown con LaTeX, TOC automático, zaps inline
- **Perfil**: artículos publicados + bio Nostr
- **Editor**: NIP-23 completo con draft support

## Organización

- `src/pages/` — rutas principales
- `src/lib/` — componentes reutilizables
- `src/nostr/` — lógica Nostr (relays, eventos, auth)

## Contribuir

Repositorio: [HipanIA/Hispania-Client](https://github.com/HipanIA/Hispania-Client)

---

*Fork de [verbiricha/habla](https://github.com/verbiricha/habla)*
