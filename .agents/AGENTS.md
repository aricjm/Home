# HTML Element ID Rule

To facilitate automated E2E testing (e.g. Playwright, Cypress) and analytics tracking, **every** HTML element in JSX/TSX code must have a unique, descriptive, and semantic `id` attribute.

## Guidelines
- Avoid generic IDs like `id="div"`. Use specific IDs like `id="weather-widget-root"` or `id="top-nav-btn-dashboard"`.
- For list items or dynamic lists, append the unique database/mock item ID to the element's ID (e.g., `id={`tracker-item-${t.id}`}`).
- Always include the `id` attribute when introducing new HTML tags or React components that render native elements.
