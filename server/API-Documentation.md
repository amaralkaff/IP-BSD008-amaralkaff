# User Registration API

## Register a New User

### Endpoint: `/register`

**Description:** This endpoint is used to register a new user.

**Request:**
- **Method:** `POST`
- **Request Body:**
  - `email` (required): User's email address.
  - `password` (required): User's password.
  - `otherData` (optional): Other user-related data.

**Responses:**

- **201 Created:**
  - **Description:** User registered successfully.
  - **Response Body (JSON):**
    ```json
    {
      "id": "user_id",
      "email": "user@example.com",
      "username": "username"
    }
    ```

- **400 Bad Request:**
  - **Description:** Missing email or password.

- **409 Conflict:**
  - **Description:** Email already in use.

# User Login API

## Authenticate User

### Endpoint: `/login`

**Description:** This endpoint is used for user authentication.

**Request:**
- **Method:** `POST`
- **Request Body:**
  - `email` (required): User's email address.
  - `password` (required): User's password.

**Responses:**

- **200 OK:**
  - **Description:** Login successful.
  - **Response Body (JSON):**
    ```json
    {
      "message": "Logged in successfully!",
      "token": "jwt_token",
      "user": {
        "id": "user_id",
        "email": "user@example.com",
        "username": "username"
      }
    }
    ```

- **400 Bad Request:**
  - **Description:** Missing email or password.

- **401 Unauthorized:**
  - **Description:** Invalid credentials.

# GitHub Login API

## Authenticate via GitHub

### Endpoint: `/github-login`

**Description:** This endpoint allows users to log in using their GitHub account.

**Request:**
- **Method:** `POST`
- **Request Body:**
  - `githubToken` (required): GitHub authentication token.

**Responses:**

- **200 OK:**
  - **Description:** Login successful.
  - **Response Body (JSON):**
    ```json
    {
      "token": "app_token",
      "user": {
        "id": "user_id",
        "email": "user@example.com",
        "username": "github_username"
      }
    }
    ```

- **500 Internal Server Error:**
  - **Description:** Error during GitHub authentication.

# AuthController API

## Google Login

### Endpoint: `/google-login`

**Description:** This endpoint is used for Google OAuth2-based user authentication.

**Request:**
- **Method:** `POST`
- **Headers:** 
  - `Authorization` (required): Bearer token obtained from Google OAuth2.

**Responses:**

- **200 OK:**
  - **Description:** Login successful. Returns an access token.
  - **Response Body (JSON):**
    ```json
    {
      "access_token": "jwt_access_token"
    }
    ```

- **400 Bad Request:**
  - **Description:** Missing or invalid Authorization header.

- **500 Internal Server Error:**
  - **Description:** Error during Google OAuth2 authentication.

# Profile Controller API

This API controller handles operations related to user profiles.

## Get All Profiles

### Endpoint: `/profiles`

**Description:** Get a list of all profiles along with associated user information.

**Request:**
- **Method:** `GET`

**Responses:**

- **200 OK:**
  - **Description:** Successfully retrieved profiles.
  - **Response Body (JSON):**
    ```json
    [
      {
        "id": "profile_id",
        "otherAttributes": "other_attributes",
        "user": {
          "id": "user_id",
          "email": "user_email"
        }
      },
      {
        "id": "profile_id2",
        "otherAttributes": "other_attributes2",
        "user": {
          "id": "user_id2",
          "email": "user_email2"
        }
      }
    ]
    ```

- **500 Internal Server Error:**
  - **Description:** Error while retrieving profiles.

## Get Profile by ID

### Endpoint: `/profiles/:id`

**Description:** Get a profile by its ID along with associated user information.

**Request:**
- **Method:** `GET`
- **Params:** `id` (required): Profile ID.

**Responses:**

- **200 OK:**
  - **Description:** Successfully retrieved the profile.
  - **Response Body (JSON):**
    ```json
    {
      "id": "profile_id",
      "otherAttributes": "other_attributes",
      "user": {
        "id": "user_id",
        "email": "user_email"
      }
    }
    ```

- **201 Created:**
  - **Description:** Profile created successfully if not found.
  - **Response Body (JSON):**
    ```json
    {
      "id": "profile_id",
      "otherAttributes": "other_attributes",
      "user": {
        "id": "user_id",
        "email": "user_email"
      }
    }
    ```

- **500 Internal Server Error:**
  - **Description:** Error while retrieving or creating the profile.

## Create Profile

### Endpoint: `/profiles`

**Description:** Create a new profile.

**Request:**
- **Method:** `POST`
- **Request Body:** Profile data.

**Responses:**

- **201 Created:**
  - **Description:** Profile created successfully.
  - **Response Body (JSON):**
    ```json
    {
      "id": "profile_id",
      "otherAttributes": "other_attributes",
      "user": {
        "id": "user_id",
        "email": "user_email"
      }
    }
    ```

- **500 Internal Server Error:**
  - **Description:** Error while creating the profile.

## Update Profile

### Endpoint: `/profiles/:id`

**Description:** Update an existing profile by its ID.

**Request:**
- **Method:** `PUT`
- **Params:** `id` (required): Profile ID.
- **Request Body:** Updated profile data.

**Responses:**

- **200 OK:**
  - **Description:** Profile updated successfully.
  - **Response Body (JSON):**
    ```json
    {
      "id": "profile_id",
      "otherAttributes": "updated_other_attributes",
      "user": {
        "id": "user_id",
        "email": "user_email"
      }
    }
    ```

- **404 Not Found:**
  - **Description:** Profile not found.

- **500 Internal Server Error:**
  - **Description:** Error while updating the profile.

# Post Controller API

This API controller handles operations related to posts.

## Get All Posts

### Endpoint: `/posts`

**Description:** Get a list of all posts along with associated comments, likes, and media information.

**Request:**
- **Method:** `GET`

**Responses:**

- **200 OK:**
  - **Description:** Successfully retrieved posts.
  - **Response Body (JSON):**
    ```json
    [
      {
        "id": "post_id",
        "content": "post_content",
        "timestamp": "post_timestamp",
        "comments": [
          {
            "id": "comment_id",
            "content": "comment_content",
            "timestamp": "comment_timestamp"
          }
        ],
        "likes": [
          {
            "id": "like_id"
          }
        ],
        "media": [
          {
            "id": "media_id",
            "file_path": "media_file_path",
            "media_type": "media_type"
          }
        ]
      }
    ]
    ```

- **500 Internal Server Error:**
  - **Description:** Error while retrieving posts.

## Get Post by ID

### Endpoint: `/posts/:id`

**Description:** Get a post by its ID along with associated comments, likes, and media information.

**Request:**
- **Method:** `GET`
- **Params:** `id` (required): Post ID.

**Responses:**

- **200 OK:**
  - **Description:** Successfully retrieved the post.
  - **Response Body (JSON):**
    ```json
    {
      "id": "post_id",
      "content": "post_content",
      "timestamp": "post_timestamp",
      "comments": [
        {
          "id": "comment_id",
          "content": "comment_content",
          "timestamp": "comment_timestamp"
        }
      ],
      "likes": [
        {
          "id": "like_id"
        }
      ],
      "media": [
        {
          "id": "media_id",
          "file_path": "media_file_path",
          "media_type": "media_type"
        }
      ]
    }
    ```

- **404 Not Found:**
  - **Description:** Post not found.

- **500 Internal Server Error:**
  - **Description:** Error while retrieving the post.

## Create Post

### Endpoint: `/posts`

**Description:** Create a new post.

**Request:**
- **Method:** `POST`
- **Request Body:** Post data.

**Responses:**

- **201 Created:**
  - **Description:** Post created successfully.
  - **Response Body (JSON):**
    ```json
    {
      "id": "post_id",
      "content": "post_content",
      "timestamp": "post_timestamp",
      "comments": [],
      "likes": [],
      "media": []
    }
    ```

- **500 Internal Server Error:**
  - **Description:** Error while creating the post.
