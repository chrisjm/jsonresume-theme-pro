import App from './src/App.svelte';
import { render as svelteRender } from 'svelte/server';

export default function render(resume) {
    const { html, css } = svelteRender(App, { props: { resume } });
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${resume.basics?.name || 'Resume'}</title>
            <style>
                ${css.code}
                /* Add any global styles here */
                body {
                    margin: 0;
                    padding: 0;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                }
            </style>
        </head>
        <body>
            ${html}
        </body>
        </html>
    `;
}
