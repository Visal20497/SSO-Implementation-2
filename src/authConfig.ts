import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    // This is the ONLY mandatory field that you need to supply.
    clientId: "426b2bdb-0525-4df6-8bcd-3a1166202da4",

    // Replace the placeholder with your tenant subdomain
    authority:
      "https://login.microsoftonline.com/4297b0b1-fd8f-4d3d-83c5-fb7564e51487",

    // Points to window.location.origin. You must register this URI on Azure Portal/App Registration.
    redirectUri: "/",

    // Indicates the page to navigate after logout
    postLogoutRedirectUri: "/",

    // If "true", will navigate back to the original request location before processing the auth code response
    navigateToLoginRequestUrl: false,
  },
  cache: {
    // Configures cache location. "sessionStorage" is more secure,
    // but "localStorage" gives you SSO between tabs.
    cacheLocation: "localStorage",

    // Set this to "true" if you are having issues in IE11 or Edge
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }

        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
      logLevel: LogLevel.Info,
    },
  },
};

// This scope matches the "Expose an API" → scope in Azure (API permission)
export const loginRequest = {
  scopes: ["User.Read"],
};
