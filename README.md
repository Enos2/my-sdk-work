# My API SDK

An open-source SDK project generated using the [Voxgig SDK generator](https://voxgig.com/sdk) from an OpenAPI specification for the PokéAPI.

## Overview

This repository contains the API specification and generated SDK project. It was created to explore the SDK generation workflow, inspect the generated output, and evaluate the developer experience.

## Project Structure

- `api.yml` — OpenAPI specification used for the project.
- `myapi-sdk/` — Generated SDK project and supporting files.
- `LICENSE` — MIT License.
- `README.md` — Project documentation.
- `REPORT.md` — Observations and findings from using the Voxgig SDK generator.

## Getting Started

### Prerequisites

- Node.js and npm
- Git
- The Voxgig SDK generation tools for regenerating the project

### Generate the SDK

Navigate to the SDK generator configuration directory:

```bash
cd myapi-sdk/.sdk
```

Install dependencies if required:

```bash
npm install
```

Run the generation command:

```bash
npm run generate
```

The generator processes the API specification and produces the SDK model and generated project output.

## Testing

The default `npm test` script currently prints `no-test` and does not execute a standard automated test suite.

To run the available model-testing command from `myapi-sdk/.sdk`, use:

```bash
npm run test-model
```

The model-testing command completed without visible errors during the initial evaluation. This does not establish that all SDK functionality has been tested or that live API requests succeed.

## License

This project is released under the MIT License. See the `LICENSE` file for details.

## Project Status

This project was created as an evaluation of the Voxgig SDK generator. The generation workflow completed without visible errors. Live API functionality and comprehensive automated testing have not yet been verified.

## Feedback

Observations, limitations, and suggestions from the generator evaluation are documented in [`REPORT.md`](REPORT.md).
