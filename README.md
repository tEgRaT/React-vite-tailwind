# Simple & Easy Vite.js, React.js, TailwindCSS Tutorial with Data Fetching

## Setting Up a Vite React Application

### Creating the Project

```bash
pnpm create vite@latest my-vite-app -- --template react
cd my-vite-app
pnpm install
pnpm run dev
```

### Installing and Configuring TailwindCSS

```bash
pnpm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

Open the *tailwind.config.js* file, configure the *content* option to match the following:

```js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './*.html',
        './public/*.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

Add TailwindCSS directives to the *src/index.css* file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Importing the CSS File

Ensure <code>import './index.css';</code> is included in the *src/main.jsx* file.

## Fetching and Displaying API Data with React

### Defining TypeScript Interfaces

```ts
interface Post {
  id: number;
  title: string;
  body: string;
}
```

### Creating the Data Fetching Component

```tsx
// src/components/DataFetchingComponent.tsx
import React, { useState, useEffect } from "react";

interface Post {
    id: number;
    title: string;
    body: string;
};

const DataFetchingComponent: React.FC = () => {
    const [data, setData] = useState<Post[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json));
    }, []);

    return (
        <div>
            {data.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    );
};

export default DataFetchingComponent;

```

Then, import the *DataFetchingComponent* into *src/App.tsx* and render it.

### Enhencing React Components with TailwindCSS

```tsx
// src/components/DataFetchingComponent.tsx
    ...
    return (
        <div className="flex flex-col items-center justify-center my-8">
            {data.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-4 w-full max-w-xl">
                    <h2 className="text-gray-700 font-bold text-xl mb-2">{item.title}</h2>
                    <p className="text-gray-700 text-base">{item.body}</p>
                </div>
            ))}
        </div>
    );
    ...
```

### Optimization for Production

Refer to [this repo](https://github.com/tEgRaT/react-tailwindcss) to using PurgeCSS to remove the unused CSS classes in production.
