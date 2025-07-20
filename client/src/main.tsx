import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";

// MSAL should be instantiated outside of the component tree to prevent it from being re-instantiated on re-renders.
const msalInstance = new PublicClientApplication(msalConfig);

// Default to using the first account if no account is active on page load
if (msalInstance.getAllAccounts().length > 0 && !msalInstance.getActiveAccount()) {
  msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
}

// Listen for sign-in event and set active account
msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload?.account) {
    const account = event.payload?.account;
    msalInstance.setActiveAccount(account);
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App  instance={msalInstance} />
);
