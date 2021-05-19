# Coding Challenge

## Description

Create a Like Service that accepts a photo identifier and a user identifier, and returns the number of likes for a
photo.

## Back-end, front-end, or full stack?

**Back-end track**: include a minimal front-end (e.g. static view or API docs). Write, document and test your API as if
it will be used by other services.

## Technical choices

I chose to create a mono-repo using [Nx](https://nx.dev/), with a React front-end and an Express back-end.

- **Language**: TypeScript
- **Testing**: Jest
- **Formatting**: Prettier
- **Static Analysis**: ESLint
- **Database**: MongoDB

This application is hosted on [Heroku](https://heroku.com).

## Anything left out / what I would do differently

- Use RxJs to better handle user events
- Store and display photos (likely hosted in an S3 bucket)
- Utilize the user schema (as seen in `userModel.ts`), so that users can have multiple photos and keep track of which
  photos they've liked.
- Add authentication, so users can see which photos they've posted and which photos they've liked
- Input validation so that user input is not queried directly against the database
- Test `dataService.ts`, `router.ts`, and `likes.service.ts`
- Send useful errors to the UI (e.g. "Photo not found")
- 'Like' functionality, where the user could click the heart button to like the photo (this is partially functional)
- Backup database, to remove single point of failure
- Load balancer pointing to multiple instances of the server, to remove single point of failure
- Optimize for mobile use

## Link to hosted application

[Link](https://powerful-taiga-08050.herokuapp.com)

## Test Cases

```
Photo ID: 60a485d7f73ca6cd7ae07285
User ID: 000001
Likes: 0
```

```
Photo ID: 60a485e5f73ca6cd7ae07286
User ID: 000002
Likes: 1
```

```
Photo ID: 60a485f4f73ca6cd7ae07287
User ID: 000001
Likes: 10
```

```
Photo ID: 60a48607f73ca6cd7ae07288
User ID: 000003
Likes: 21
```
