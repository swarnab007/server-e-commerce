# E-Commerce Server
## Welcome to the E-Commerce Server repository. This is the backend service for an e-commerce platform
## Features
 - Product Management: CRUD operations for products.
 - User Authentication: Secure user registration and login with JWT.
 - Order Processing: Manage customer orders and track their statuses.
 - Payment Integration: Stripe integration for secure transactions.
 - Cloud Storage: Cloudinary for storing product images.
 - Caching: Redis for improved performance.
 - Docker Support: Containerized application for seamless deployment.
 - CI/CD Pipeline: Automated deployment using GitHub Actions and AWS.

## Getting Started
 ### Prerequisites
Ensure you have the following installed:
  - Node.js
  - MongoDB
  - Redis
  - Docker
  - AWS CLI

### Installation
#### 1. Clone the Repository
```
git clone https://github.com/swarnab007/server-e-commerce.git
cd server-e-commerce
```
#### 2. Install dependencies:
```
npm i
```
#### 3.Set up environment variables by Creating an .env file
```
ACCESS_TOKEN_SECRET=youraccesstokensecret
REFRESH_TOKEN_SECRET=yourrefreshtokensecret
NODE_ENV=development
UPSTASH_REDIS_URL=yourupstashredisurl
PORT=8000
MONGO_URI=yourmongodburi
CLOUDINARY_CLOUD_NAME=yourcloudinarycloudname
CLOUDINARY_API_KEY=yourcloudinaryapikey
CLOUDINARY_API_SECRET=yourcloudinaryapisecret
STRIPE_PUBLISHABLE_KEY=yourstripepublishablekey
STRIPE_SECRET_KEY=yourstripesecretkey
```
#### 4. Start the Application
```
npm start
```
### Docker Deployment
#### 1. Build the Docker image:
```
docker build -t ecommerce-server .
```
#### 2.Run the container:
```
docker run -d -p 8000:8000 --env-file .env --name ecommerce-server ecommerce-server
```
#### 3.Check running containers:
```
docker ps
```
### CI/CD with GitHub Actions :
#### The project is set up with GitHub Actions for automated deployment.
 - On every push to main branch:
 - Lint and test the code.
 - Build the Docker image.
 - Push the image to Docker Hub.
 - Deploy to AWS EC2.
### Contributing
 - Fork the repository.
 - Create a new branch (git checkout -b feature/your-feature).
 - Commit your changes (git commit -m 'Add some feature').
 - Push to the branch (git push origin feature/your-feature).
 - Open a pull request.
