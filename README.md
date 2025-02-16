# 🥧 piekit

[![Work In Progress](https://img.shields.io/badge/work_in_progress-yellow)](https://github.com/syfqpie/piekit)

A collection of reusable React UI components built with [Vite](https://vitejs.dev/) and [Rollup](https://rollupjs.org/).

> **Note:** This library requires [Tailwind CSS](https://tailwindcss.com/) (v4 or above) as a peer dependency. Make sure your project is set up with Tailwind CSS for proper styling.

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Generating Components & Sandboxes](#generating-components--sandboxes)
- [Unit Testing](#unit-testing)

## Installation

To add **piekit** to your project, install it via npm (or your preferred package manager):

```bash
npm install piekit
```

Since Tailwind CSS is a required peer dependency, ensure you have it installed and properly configured in your project:

```bash
npm install tailwindcss@latest
```

Then follow the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation) if you haven't set it up already.

## Development

Clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/syfqpie/piekit
cd piekit

# Install pre-commit hook (if you don't have it)
pre-commit install --hook-type commit-msg

# Install dependencies
npm install
```

### Running the Development Server

Start the local development server:

```bash
npm run dev
```

## Generating Components & Sandboxes

To streamline the creation of new components and sandboxes, use the provided generate script:

- **Create a new component:**

  ```bash
  npm run generate component <ComponentName>
  ```

- **Create a new sandbox:**

  ```bash
  npm run generate sandbox <ComponentName>
  ```

## Unit Testing

Run unit tests using [Vitest](https://vitest.dev/):

- **Watch mode (re-run tests on changes):**

  ```bash
  npm test
  ```

- **Single run (without watch mode):**

  ```bash
  npm test run
  ```
