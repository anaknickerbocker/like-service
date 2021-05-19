# LikeServiceNx

## Coding Challenge

[Link to Coding Challenge Write-Up](./Coding%20Challenge%20Write-Up.md)

## Development server

Run `npx nx serve like-service` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload
if you change any of the source files.

## Build

Run `nx build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag
for a production build.

## API Usage

GET `api/v1/users/${userId}/photos/${photoId}/likes`

Returns the found photo:

```json
{
  "id": "photoId",
  "userId": "userId",
  "likes": 0,
  "liked": false
}
```

PUT `api/v1/users/${userId}/photos/${photoId}/like`

Returns the updated photo:

```json
{
  "id": "photoId",
  "userId": "userId",
  "likes": 1,
  "liked": true
}
```

PUT `api/v1/users/${userId}/photos/${photoId}/like`

Returns the updated photo:

```json
{
  "id": "photoId",
  "userId": "userId",
  "likes": 0,
  "liked": false
}
```

## Running unit tests

Run `nx test like-service` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e like-service` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
