# Documentação de design – Natleaf

Guia de cores, efeitos e estilos usados nas páginas do site Natleaf (home e calculadora) para replicar o mesmo visual no **App Natleaf**.

---

## 1. Variáveis CSS (`:root`)

Use este bloco como referência única no projeto:

```css
:root {
  --primary: #7dba00;
  --primary-hover: #6aa300;
  --primary-light: #e8f5d8;
  --error: #c53030;
  --bg: #f3f4f6;
  --surface: #ffffff;
  --text: #1f2937;
  --text-secondary: #4b5563;
  --text-muted: #6b7280;
  --border: #e5e7eb;
  --radius: 14px;
  --radius-sm: 8px;
  --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-hover: 0 12px 28px -8px rgba(125, 186, 0, 0.35);
  --shadow-back: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-back-hover: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --font: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --focus-ring: 0 0 0 3px var(--primary-light);
  --overlay: rgba(0, 0, 0, 0.5);
}
```

---

## 2. Cores (resumo)

### Marca

| Nome            | Hex       | Uso |
|-----------------|-----------|-----|
| **Primary**     | `#7dba00` | Botão principal, links, foco |
| **Primary hover** | `#6aa300` | Hover do botão principal |
| **Primary light** | `#e8f5d8` | Fundo hover secundário, anel de foco |
| **Error**       | `#c53030` | Erros e alertas |

### Neutros

| Nome      | Hex       | Uso |
|-----------|-----------|-----|
| **Bg**    | `#f3f4f6` | Fundo da página |
| **Surface** | `#ffffff` | Cards, botões secundários |
| **Text**  | `#1f2937` | Título e texto principal |
| **Text secondary** | `#4b5563` | Texto secundário |
| **Text muted** | `#6b7280` | Legendas |
| **Border** | `#e5e7eb` | Bordas |

### Painel de resultados (calculadora)

| Nome             | Hex       |
|------------------|-----------|
| **Results bg**   | `#2d4a00` |
| **Results text** | `#e8f5d8` |
| **Results accent** | `#9ccc00` |

---

## 3. Botões

### Primário

- **Fundo:** `var(--primary)` → `#7dba00`
- **Texto:** `#ffffff`
- **Border-radius:** `var(--radius)` → `14px`
- **Sombra:** `var(--shadow)`
- **Hover:** `var(--primary-hover)`, `transform: translateY(-1px)`, `var(--shadow-hover)`

### Secundário (outline)

- **Fundo:** `var(--surface)`
- **Texto:** `var(--text)`
- **Borda:** `2px solid var(--border)`
- **Hover:** borda e texto `var(--primary)`, fundo `var(--primary-light)`

### Voltar / link discreto

- **Fundo:** `var(--surface)`
- **Sombra:** `var(--shadow-back)`
- **Border-radius:** `var(--radius-sm)` → `8px`
- **Hover:** texto `var(--primary)`, `var(--shadow-back-hover)`, `translateY(-1px)`

---

## 4. Inputs

- **Borda:** `1px solid var(--border)`
- **Border-radius:** `var(--radius-sm)`
- **Fundo:** `var(--surface)`
- **Focus:** `border-color: var(--primary)`, `box-shadow: var(--focus-ring)`, `outline: none`

---

## 5. Efeitos

| Efeito     | Valor |
|------------|--------|
| Transição  | `all 0.2s` ou `all 0.2s ease` |
| Hover levitar | `transform: translateY(-1px)` |
| Cards radius | `var(--radius)` → 14px |
| Inputs/bt pequenos | `var(--radius-sm)` → 8px |
| Overlay modal | `var(--overlay)` |

---

## 6. Tipografia

- **Fonte:** `var(--font)` → `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
- **Título home:** `1.75rem`, `font-weight: 700`, `letter-spacing: -0.02em`
- **Subtítulo:** `1rem`, `color: var(--text-muted)`
- **Botões:** `1rem`, `font-weight: 600`

---

## 7. Resumo para o App Natleaf

1. **Cores:** Primária `#7dba00`, hover `#6aa300`, fundo claro `#e8f5d8`, fundo página `#f3f4f6`, superfícies `#ffffff`, texto `#1f2937` / `#4b5563`, bordas `#e5e7eb`, erro `#c53030`.
2. **Botão primário:** Verde `#7dba00`, hover `#6aa300`, sombra normal e no hover `var(--shadow-hover)` com `translateY(-1px)`.
3. **Botão secundário:** Branco, borda `#e5e7eb`; hover borda e texto `#7dba00`, fundo `#e8f5d8`.
4. **Inputs em foco:** Borda `#7dba00` e anel `0 0 0 3px #e8f5d8`.
5. **Transições:** `0.2s` em hover/focus.
6. **Fonte:** Inter.

Com isso, o App Natleaf fica alinhado às cores e efeitos das páginas atuais.
