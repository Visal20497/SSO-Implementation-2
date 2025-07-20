# 🔐 Microsoft SSO React App (with MSAL)

This project demonstrates how to integrate **Microsoft Single Sign-On (SSO)** in a **React app** using the **Microsoft Authentication Library (MSAL)**.

---

## 📦 Tech Stack

- React (with Vite)
- TypeScript/JavaScript
- @azure/msal-react
- @azure/msal-browser
- Microsoft Entra ID (formerly Azure AD)

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo


🏗️ Azure Setup
Step 1: Register an App
Go to Azure Portal – App Registrations

Click "New registration"

Set:

Name: Your App Name

Supported account types: Single tenant or Multitenant

Redirect URI: http://localhost:5173/ (or your production domain)

Step 2: Configure Authentication
Under Authentication:

Add http://localhost:5173/ to redirect URIs

Enable Access tokens (for implicit flows if needed)

Step 3: Configure API Permissions
Go to API permissions

Add:

Microsoft Graph → Delegated → User.Read

Step 4: Get App Credentials
Copy the Client ID

Copy your Tenant ID from the Overview section

🔧 Configure MSAL
Update the authConfig.ts file with your values:
export const msalConfig = {
  auth: {
    clientId: "<YOUR_CLIENT_ID>",
    authority: "https://login.microsoftonline.com/<YOUR_TENANT_ID>",
    redirectUri: "http://localhost:5173",
  },
  ...
};

💻 Run the App
npm run dev

📁 File Structure
src/
│
├── App.tsx               # Main app component with SSO login logic
├── Home.tsx              # Sample protected component after login
├── authConfig.ts         # MSAL configuration
├── main.tsx              # Entry point + MSAL instance
└── App.css               # Basic styles

✨ Features
Microsoft Entra ID login via loginRedirect

SSO between tabs using localStorage

Authenticated/unauthenticated templates

Logout with redirect

📌 Notes
Make sure the redirect URI is added in Azure

Use "prompt: 'select_account'" instead of "create" if experiencing login issues

Token scopes like ["User.Read"] should be granted API permission

🔒 License
MIT
