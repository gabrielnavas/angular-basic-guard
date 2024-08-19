# How the `CanActivateFn Guard` Works

This project demonstrates the use of Angular's `CanActivateFn` guard to manage access to different routes.

## Route Overview

1. **`/home` (Public)**
   - Accessible by everyone.
   - Displays links to the login page and the private page.

2. **`/login` (Public)**
   - Accessible by everyone.
   - Provides options to log in and return to the home page.

3. **`/private` (Protected)**
   - Accessible only to authenticated users.
   - Displays a link to return to the home page.
