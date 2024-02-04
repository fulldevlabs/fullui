---
title: Quick start
description: A quickstart on how to begin using FullUI.
---
Follow the steps below to get started in 5 minutes, and a professional website in an hour.

## Installation
Run one of the following commands to install fullui into your project:

```bash
pnpm install @silveltman/fullui
```
```bash
npm install @silveltman/fullui
```
```bash
yarn add @silveltman/fullui
```

:::note
We will move to a better package name soon, but for now, this is what we have.
:::

## Usage
Fullui features a **Design System** and **Component Library**. The design system is added through an Astro integration and sets up CSS variables for sizing and theming. The component library is a set of components which are built using the design system.

### Design System 
The design system is enabled with a simple Astro integration. More on this later, but here is the quicked way to start using it:

```ts
// astro.config.ts
import { defineConfig } from 'astro/config'
import { fulluiIntegration } from '@silvelmtan/fullui'

export default defineConfig({
  // Your astro config...
  integrations: [
    fulluiIntegration(),
  ],
})
```

### Components
You can import the components you need from the library and use them in your project. Here is an example of how to use a button:

```astro
---
import { Button } from '@silveltman/fullui'
---

<Button href="/">Click me</Button>
<!-- or -->
<Button href="/" label="Click me"/>
```

:::note[Why two ways?]
The first way is cleaner when hardcoding the text. We prefer the second way when the text comes from a CMS or Astro Content Colelctions (ACC?🤔).
:::

## Typescript
Most of Fullui is typed, and the parts that are not yet, will for sure be. You can use the component types using the new Astro ComponentProps type utility, [released in V4.3](https://astro.build/blog/astro-430/#add-componentprops-type-utility). Here is an example:

```astro
---
import type { ComponentProps } from 'astro/types';
import { Button } from '@silveltman/fullui'

type ButtonProps = ComponentProps<typeof Button>
---

<Button href="/">Click me</Button>
```