# Documentação de design – Natleaf

Guia de cores, efeitos e estilos usados nas páginas do site Natleaf (home e calculadora) para replicar o mesmo visual no **App Natleaf**.

---

## 1. Cores

### Paleta principal (marca)

| Nome           | Hex       | Uso                                      |
|----------------|-----------|------------------------------------------|
| **Primary**    | `#059669`  | Botão principal, links, foco, destaques  |
| **Primary hover** | `#047857` | Estado hover do botão principal      |
| **Primary light** | `#d1fae5` | Fundo hover botão secundário, anel de foco |

### Neutros (fundos e texto)

| Nome            | Hex       | Uso                          |
|-----------------|-----------|------------------------------|
| **Background**  | `#f3f4f6` | Fundo da página              |
| **Card / branco** | `#ffffff` | Fundo de cards e botões secundários |
| **Text main**   | `#1f2937` | Título e texto principal     |
| **Text secondary** | `#4b5563` | Texto secundário         |
| **Text muted**  | `#6b7280` ou `#9ca3af` | Legendas, placeholder |
| **Border**      | `#e5e7eb` | Bordas de inputs e botões outline |

### Painel de resultados (calculadora – opcional para o app)

| Nome             | Hex       |
|------------------|-----------|
| **Results bg**   | `#064e3b`  |
| **Results text** | `#ecfdf5`  |
| **Results accent** | `#34d399` |

### Overlay (modal)

| Uso        | Valor                    |
|------------|--------------------------|
| Fundo modal | `rgba(0, 0, 0, 0.5)`   |

---

## 2. Botões

### Botão primário (ex.: “App Natleaf”, “Entendi”)

- **Fundo:** `#059669`
- **Texto:** `#ffffff`
- **Border-radius:** `12px`
- **Sombra padrão:** `0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 10px -5px rgba(0, 0, 0, 0.04)`
- **Padding:** `16px 24px`
- **Fonte:** `1rem`, `font-weight: 600`
- **Transição:** `all 0.2s`

**Hover:**

- **Fundo:** `#047857`
- **Transform:** `translateY(-1px)`
- **Sombra:** `0 12px 28px -8px rgba(5, 150, 105, 0.4)`

### Botão secundário (outline)

- **Fundo:** `#ffffff`
- **Texto:** `#1f2937`
- **Borda:** `2px solid #e5e7eb`
- **Border-radius:** `12px`
- **Transição:** `all 0.2s`

**Hover:**

- **Borda:** `#059669`
- **Texto:** `#059669`
- **Fundo:** `#d1fae5`

### Botão “Voltar” / link discreto (canto da tela)

- **Fundo:** `#ffffff`
- **Texto:** `#4b5563`
- **Sombra:** `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **Border-radius:** `8px`
- **Padding:** `8px 16px`
- **Transição:** `all 0.2s ease`

**Hover:**

- **Texto:** `#059669`
- **Sombra:** `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)` (ou equivalente mais forte)
- **Transform:** `translateY(-1px)`

---

## 3. Campos de formulário (inputs)

- **Borda:** `1px solid #e5e7eb`
- **Border-radius:** `8px`
- **Fundo:** `#ffffff`
- **Altura sugerida:** `48px` (desktop), `42px` (mobile)
- **Transição:** `all 0.2s`

**Focus:**

- **Borda:** `#059669`
- **Sombra (anel de foco):** `0 0 0 3px #d1fae5`
- **Outline:** `none`

---

## 4. Efeitos comuns

| Efeito        | Valor |
|---------------|--------|
| **Transição padrão** | `all 0.2s` ou `all 0.2s ease` |
| **Hover “levitar”**  | `transform: translateY(-1px)` |
| **Border-radius cards** | `12px` |
| **Border-radius inputs/botões pequenos** | `8px` |

---

## 5. Tipografia

- **Fonte:** `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
- **Título (hero/home):** `1.75rem`, `font-weight: 700`, `letter-spacing: -0.02em`
- **Subtítulo:** `1rem`, cor `#6b7280`
- **Botões:** `1rem`, `font-weight: 600`
- **Texto secundário:** `0.95rem` ou `0.875rem`

---

## 6. Resumo para o App Natleaf

Para deixar o App Natleaf com o mesmo estilo, use:

1. **Cores:**  
   Primária `#059669`, hover `#047857`, fundo claro `#d1fae5`, fundo de página `#f3f4f6`, texto `#1f2937` / `#4b5563`, bordas `#e5e7eb`.

2. **Botão primário:**  
   Verde `#059669`, hover mais escuro `#047857`, sombra leve e no hover `translateY(-1px)` + sombra verde suave `rgba(5, 150, 105, 0.4)`.

3. **Botão secundário/outline:**  
   Branco, borda `#e5e7eb`; no hover borda e texto `#059669`, fundo `#d1fae5`.

4. **Inputs em foco:**  
   Borda `#059669` e anel `0 0 0 3px #d1fae5`.

5. **Transições:**  
   `0.2s` em hover/focus.

6. **Fonte:**  
   Inter (Google Fonts ou sistema).

Com isso, o App Natleaf fica alinhado às cores e efeitos (hover, focus, sombras) das páginas atuais.
