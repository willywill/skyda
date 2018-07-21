# Config Schema

```javascript
export default {
    dev: {
        port: Number, // Application Port
    },
    domain: String, // Domain URL
    appName: String, // App Name
    db: {
        url: String, // Database Connection String
    },
    mail: {
        host: String, // SMTP Mail Address
        port: String || Number, // SMTP Port
        secure: Boolean, // Use SSL?
        user: String, // Email From
        password: String, // Email Password
    },
    auth: {
        secret: String, // Private Encryption Key
    }
};
```

## Info

---

Use this guide to help you build your own config and place it in the root of the server application folder.
