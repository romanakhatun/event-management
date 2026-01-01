# DISHVENT – Food Event Management Platform 🍽️

## Project Overview

**DISHVENT** is a sophisticated food event management platform designed to streamline how users discover, organize, and manage culinary gatherings. Built with the **Next.js** framework, the platform offers a seamless transition between server-side rendering and dynamic client-side interactions. 

The application focuses on a **secure-first approach** with NextAuth and provides a powerful administrative interface for managing food items and event listings through dynamic API integration.

---

## 🔗 Links

- **Live Deployment:** [View Live Site](https://event-management-xi-bay.vercel.app/)
- **GitHub Repository:** [View Source Code](https://github.com/romanakhatun/event-management))

---

## ✨ Key Features

* 🔐 **Secure Authentication:** Implemented a robust workflow using **NextAuth.js** for session handling and protected routes.
* 🍱 **Dynamic Food Management:** Full CRUD (Create, Read, Update, Delete) capabilities for food items powered by **Next.js API routes**.
* 🎨 **Clean & Responsive UI:** Developed polished, mobile-friendly components using **Tailwind CSS**.
* 🚀 **Performance Optimized:** Leveraged Next.js Image optimization and Server-Side Rendering (SSR) for fast load times.
* 💾 **Scalable Database:** Integrated **MongoDB** to handle flexible food event schemas and user data.

---

## Screenshot

![DISHVENT Screenshot](./event-management.png)

## 🛠️ Tech Stack

### Core Frameworks
- **Next.js** (App Router / Pages Router)
- **React.js**
- **Node.js**

### Authentication & Security
- **NextAuth.js** (JWT & Session Management)

### Styling & UI
- **Tailwind CSS** (Utility-first styling)
- **React Icons** (Icons)

### Database & API
- **MongoDB** (NoSQL Database)
- **REST API** (Internal Next.js API Routes)

---

## 🚀 How to Run the Project Locally

Follow these steps to set up **DISHVENT** on your local development environment.

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn**
- **MongoDB Atlas** account or a local MongoDB instance

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/romanakhatun/event-management.git
cd dishvent
```

### Step 2: Install Dependencies

```Bash
npm install
```
### Step 3: Environment Variables Setup

#### Create a .env.local file in the root directory and populate it with your credentials:

```Bash
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_string

# MongoDB Connection
MONGODB_URI=your_mongodb_connection_uri

#  OAuth Providers
GOOGLE_CLIENT_ID=your_google_id
GOOGLE_CLIENT_SECRET=your_google_secret
```
