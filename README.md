# 🥧 piekit

[![Work In Progress](https://img.shields.io/badge/work_in_progress-yellow)](https://github.com/syfqpie/piekit)

A collection of reusable React UI components built with [Vite](https://vitejs.dev/) and [Rollup](https://rollupjs.org/).

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Generating Components & Sandboxes](#generating-components--sandboxes)
- [Unit Testing](#unit-testing)

## Installation

To add **piekit** to your project, install it via npm (or your preferred package manager):

```bash
npm install piekit

or

yarn add piekit

or

pnpm add piekit
```

## Development

Before you begin development, make sure you have the following installed:

- [Node.js (version 18 or higher)](https://nodejs.org/en)
- [pnpm](https://pnpm.io/)
- [pre-commit](https://pre-commit.com/)

Then, clone the repository and install the dependencies:

```bash
# clone the repository
git clone https://github.com/syfqpie/piekit
cd piekit

# install pre-commit hook
pre-commit install --hook-type commit-msg

# install dependencies
pnpm install
```

### Running the Development Server

Start the local development server:

```bash
pnpm run dev
```

## Generating Components & Sandboxes

To streamline the creation of new components and sandboxes, use the provided generate script:

- **Create a new component:**

  ```bash
  pnpm run generate component <ComponentName>
  ```

## Unit Testing

Run unit tests using [Vitest](https://vitest.dev/):

- **Watch mode (re-run tests on changes):**

  ```bash
  pnpm test
  ```

- **Single run (without watch mode):**

  ```bash
  pnpm test run
  ```

## Documentation

The documentation for piekit can be found in the `/docs/README.md` file. To view it, simply open the file in the project directory.