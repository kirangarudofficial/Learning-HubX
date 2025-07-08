# FastAPI Authentication Microservice

A comprehensive authentication microservice built with FastAPI, featuring JWT tokens, OAuth simulation, and 2FA toggle functionality.

## Features

- **User Signup**: Register new users with email and password
- **User Login**: Authenticate users and generate JWT tokens
- **OAuth Simulation**: Mock Google/Facebook OAuth integration
- **2FA Toggle**: Enable/disable two-factor authentication (flag-based)
- **JWT Authentication**: Secure API endpoints with Bearer tokens
- **In-Memory Storage**: No database required for development

## Installation

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the server:
```bash
python main.py
```

The API will be available at `http://localhost:8000`

## API Endpoints

### Authentication Endpoints

#### POST `/signup`
Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword",
  "full_name": "John Doe"
}
```

**Response:**
```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "token_type": "bearer",
  "expires_in": 1800
}
```

#### POST `/login`
Authenticate existing user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "token_type": "bearer",
  "expires_in": 1800
}
```

#### POST `/oauth`
OAuth login simulation (Google/Facebook).

**Request Body:**
```json
{
  "provider": "google",
  "access_token": "mock_google_token_12345",
  "email": "user@gmail.com",
  "full_name": "John Doe"
}
```

**Mock Tokens:**
- Google: `mock_google_token_12345`
- Facebook: `mock_facebook_token_67890`

#### POST `/enable-2fa`
Toggle two-factor authentication (requires authentication).

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Request Body:**
```json
{
  "enable": true
}
```

### User Endpoints

#### GET `/profile`
Get current user profile (requires authentication).

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Response:**
```json
{
  "id": "uuid-string",
  "email": "user@example.com",
  "full_name": "John Doe",
  "is_verified": true,
  "two_fa_enabled": false,
  "created_at": "2024-01-01T12:00:00"
}
```

#### GET `/users`
List all registered users (debug endpoint).

## Testing

Run the test script to verify all endpoints:

```bash
python test_auth.py
```

This will test:
- User signup
- User login
- OAuth authentication
- 2FA toggle
- Profile retrieval
- User listing

## Security Features

- **Password Hashing**: Uses bcrypt for secure password storage
- **JWT Tokens**: Stateless authentication with configurable expiration
- **CORS Support**: Cross-origin requests enabled
- **Input Validation**: Pydantic models for request validation
- **OAuth Simulation**: Mock implementation for testing

## Configuration

Key configuration variables in `main.py`:

- `SECRET_KEY`: JWT signing key (change in production)
- `ALGORITHM`: JWT algorithm (HS256)
- `ACCESS_TOKEN_EXPIRE_MINUTES`: Token expiration time (30 minutes)

## Production Considerations

For production deployment:

1. Use a real database instead of in-memory storage
2. Implement actual OAuth provider verification
3. Add real 2FA with OTP generation/verification
4. Use environment variables for configuration
5. Add rate limiting and security headers
6. Implement proper logging and monitoring
7. Use HTTPS and secure JWT secret keys

## API Documentation

Visit `http://localhost:8000/docs` for interactive API documentation (Swagger UI).