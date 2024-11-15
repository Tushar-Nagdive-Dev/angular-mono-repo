# Angular Monorepo with Angular CLI

## Step-by-Step Guide

### Step 1: Install Angular CLI
First, if you haven't already installed the Angular CLI, run:
```bash
npm install -g @angular/cli
```

### Step 2: Create a New Workspace
#### Create a new Angular workspace:
```ng new my-workspace --create-application false
cd my-workspace
```

### Step 3: Create Applications with Routing
#### Add applications with routing:
```
ng generate application apps/app1 --routing
ng generate application apps/app2 --routing
```

### Step 4: Create Libraries for Each Application
#### Generate libraries for each application:
```
ng generate library libs/app1-lib1
ng generate library libs/app2-lib1
```

### Step 5: Folder Structure
#### Your folder structure should look like this:
my-workspace/
│
├── angular.json
├── package.json
├── tsconfig.json
│
├── apps/
│   ├── app1/
│   ├── app2/
│
├── libs/
│   ├── app1-lib1/
│   ├── app2-lib1/
│
├── node_modules/
└── ...



### Commands use in this application
```
    ng new angular-monorepo-workspace --create-application=false

    ng generate application expenses-mgmt --routing --standalone=false
    
    ng generate application sipwise --routing --standalone=false

    ng generate library expense-lib --project-root=libs/expense-lib

    // on specific library root path execute below command for angular material
    npm install @angular/material @angular/cdk @angular/animations

    ng generate library sipwise-lib --project-root=libs/sipwise-lib

    ng add @angular/material --project expense-lib

    ng generate module expense-library-routing --project=expense-lib --routing

    ng generate component components/dashboard --project=expense-lib

    ng build expense-lib

    for Development 
    cd path/to/library
    npm link
```












To consume separate Angular libraries in both local development and production within a monorepo setup, follow these steps:

## Local Development

### Step 1: Link Libraries

1. **Build the Library**:
   First, ensure that your library is built. Navigate to the library directory and run:

   ```bash
   ng build lib-one
   ng build lib-two
   ```

2. **Use npm link**:
   To link the library for local development, navigate to the `dist` folder of your library and create a symlink.

   ```bash
   cd dist/lib-one
   npm link
   cd dist/lib-two
   npm link
   ```

3. **Link in Application**:
   In each application that will consume the libraries, link them:

   ```bash
   cd path/to/app-one
   npm link lib-one
   npm link lib-two

   cd path/to/app-two
   npm link lib-one
   npm link lib-two
   ```

### Step 2: Import Libraries in Applications

1. **Modify App Module**:
   In your application’s main module (e.g., `app.module.ts`), import the libraries:

   ```typescript
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { AppRoutingModule } from './app-routing.module';
   import { AppComponent } from './app.component';
   import { LibOneModule } from 'lib-one'; // Adjust based on your library structure
   import { LibTwoModule } from 'lib-two';

   @NgModule({
     declarations: [AppComponent],
     imports: [
       BrowserModule,
       AppRoutingModule,
       LibOneModule,
       LibTwoModule,
     ],
     providers: [],
     bootstrap: [AppComponent],
   })
   export class AppModule {}
   ```

2. **Serve the Application**:
   
```bash
ng serve app-one
ng serve app-two
```

You can now develop using the libraries locally, with changes reflected immediately.

## Production Setup

### Step 1: Build Libraries

1. **Build for Production**:
   
```bash
ng build lib-one --prod
ng build lib-two --prod
```

This will generate the production-ready files in the `dist` directory of each library.

### Step 2: Install Libraries in Applications

1. **Install Locally or Publish**:
   
- If you want to install directly from the `dist` folder, navigate to each application and run:

```bash
npm install "file:../libs/lib-one/dist/lib-one"
npm install "file:../libs/lib-two/dist/lib-two"
```

- Alternatively, you can publish your libraries to a private or public npm registry and install them using:

```bash
npm install @your-scope/lib-one
npm install @your-scope/lib-two
```

### Step 3: Import Libraries in Applications

As in local development, ensure you import the libraries in your application module as shown above.

### Step 4: Build and Serve Applications for Production

1. **Build Applications**:
   
```bash
ng build app-one --prod
ng build app-two --prod
```

2. **Serve Applications**:
You can deploy your applications to a web server or hosting service after building them for production.

By following these steps, you can effectively consume separate Angular libraries in both local development and production environments within a monorepo setup. This approach ensures modularity and ease of maintenance while allowing for independent development of each library.

Citations:
[1] https://itequia.com/en/angular-libraries-what-are-they-and-how-to-use-them/
[2] https://angular.dev/tools/libraries/using-libraries/
[3] https://www.willtaylor.blog/complete-guide-to-angular-libraries/
[4] https://dev.to/jsanddotnet/create-an-angular-library-and-consume-it-locally-with-debugging-cma
[5] https://www.youtube.com/watch?v=c08TyqtQQ4I
[6] https://angular.dev/tools/libraries/creating-libraries/
[7] https://stackoverflow.com/questions/57170936/is-there-a-better-way-to-build-an-angular-monorepo-app-with-libraries
[8] https://www.youtube.com/watch?v=hIEbJkP1M5E



npm install @auth0/angular-jwt




❯ node -verison
node: bad option: -verison
❯ node --verison
node: bad option: --verison
❯ npm version
{
  npm: '10.8.3',
  node: '22.9.0',
  acorn: '8.12.1',
  ada: '2.9.0',
  amaro: '0.1.8',
  ares: '1.33.1',
  brotli: '1.1.0',
  cjs_module_lexer: '1.4.1',
  cldr: '45.0',
  icu: '75.1',
  llhttp: '9.2.1',
  modules: '127',
  napi: '9',
  nbytes: '0.1.1',
  ncrypto: '0.0.1',
  nghttp2: '1.63.0',
  nghttp3: '0.7.0',
  ngtcp2: '1.3.0',
  openssl: '3.0.13+quic',
  simdjson: '3.10.0',
  simdutf: '5.5.0',
  sqlite: '3.46.1',
  tz: '2024a',
  undici: '6.19.8',
  unicode: '15.1',
  uv: '1.48.0',
  uvwasi: '0.0.21',
  v8: '12.4.254.21-node.19',
  zlib: '1.3.0.1-motley-71660e1'
}
❯ npm --version
10.8.3
❯ node --version
v22.9.0






























Here’s a **final, well-structured, and merged solution** that covers everything discussed in this conversation, organized in a detailed manner with all necessary changes for **Auth Server** and **Expense Microservice** to securely handle JWT-based authentication and role-based authorization:

---

## **Overview**

You are building a system where:

1. **Auth Server**: Handles user authentication and generates JWT tokens with user roles.
2. **Expense Microservice**: Consumes JWT tokens from Auth Server, validates them, and restricts access based on roles (e.g., only users with the `USER` role can access expense-related endpoints).
3. Both systems will be secured using **JWT token** and **SSL**, and requests will be routed through an **API Gateway**.

---

## **Step 1: Define Common JWT Configuration Properties**

### **File: `application.properties` (for both Auth Server and Expense Microservice)**

```properties
# JWT Configuration
jwt.secret=EXP-ACCESS
jwt.expiration=900000  # 15 minutes (adjust based on your requirements)
```

- `jwt.secret`: Secret key used to sign the JWT tokens.
- `jwt.expiration`: Expiration time of the JWT token in milliseconds (15 minutes in this example).

---

## **Step 2: JWT Token Provider for Both Auth Server and Expense Microservice**

We’ll create a `JwtTokenProvider` class that is used in both **Auth Server** and **Expense Microservice** for generating and validating JWT tokens.

### **File: `JwtTokenProvider.java`**

```java
package com.inn.auth_server_exp.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Component
public class JwtTokenProvider {

    private static final Logger log = LoggerFactory.getLogger(JwtTokenProvider.class);

    @Value("${jwt.secret}")
    private String secretKey;  // Inject the secret key from application.properties

    @Value("${jwt.expiration}")
    private long expirationTime;  // Inject the expiration time from application.properties

    // Generate JWT token for the authenticated user
    public String generateToken(String username, Collection<? extends GrantedAuthority> authorities) {
        Date now = new Date();
        Date expiration = new Date(now.getTime() + expirationTime);

        List<String> roles = new ArrayList<>();
        for (GrantedAuthority authority : authorities) {
            roles.add(authority.getAuthority());  // Add roles to the JWT token
        }

        return Jwts.builder()
                .setSubject(username)
                .claim("roles", roles)  // Store roles as claims in the token
                .setIssuedAt(now)
                .setExpiration(expiration)
                .signWith(SignatureAlgorithm.HS512, secretKey.getBytes())
                .compact();
    }

    // Extract Authentication object from the JWT token
    public UsernamePasswordAuthenticationToken getAuthentication(String token) {
        Claims claims = parseToken(token);
        if (claims != null) {
            String user = claims.getSubject();
            List<String> roles = claims.get("roles", List.class);  // Extract roles from the token

            // Convert roles to GrantedAuthorities
            Collection<GrantedAuthority> authorities = new ArrayList<>();
            for (String role : roles) {
                authorities.add(new SimpleGrantedAuthority(role));
            }

            return new UsernamePasswordAuthenticationToken(user, null, authorities);
        }
        return null;
    }

    // Validate the JWT token
    public boolean validateToken(String token) {
        try {
            parseToken(token);  // If parsing succeeds, the token is valid
            return true;
        } catch (Exception e) {
            log.error("Invalid JWT token", e);
            return false;
        }
    }

    // Helper method to parse the JWT token and get claims
    private Claims parseToken(String token) {
        try {
            return Jwts.parser()
                    .setSigningKey(secretKey.getBytes())
                    .parseClaimsJws(token.replace("Bearer ", ""))
                    .getBody();
        } catch (Exception e) {
            log.error("Error parsing JWT token", e);
            return null;
        }
    }
}
```

### **Explanation of `JwtTokenProvider.java`:**
- **Token Generation**: Generates a JWT token containing the username and roles (authorities).
- **Token Validation**: Validates the JWT token and ensures it has not expired.
- **Token Parsing**: Extracts claims (including roles) from the JWT token for further authentication and authorization.

---

## **Step 3: Auth Server - Handle User Authentication and JWT Token Generation**

### **File: `AuthController.java` (Auth Server)**

```java
package com.inn.auth_server_exp.controller;

import com.inn.auth_server_exp.utils.JwtTokenProvider;
import com.inn.auth_server_exp.model.LoginRequest;
import com.inn.auth_server_exp.model.JwtResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @PostMapping("/login")
    public JwtResponse login(@RequestBody LoginRequest loginRequest) {
        // Authenticate the user (you can add custom authentication logic here)
        // For simplicity, we will assume authentication is successful for this example.
        UsernamePasswordAuthenticationToken authentication = 
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword());

        // Generate JWT token with the roles (assuming 'USER' role for simplicity)
        String token = jwtTokenProvider.generateToken(loginRequest.getUsername(), 
                List.of(new SimpleGrantedAuthority("ROLE_USER")));

        return new JwtResponse(token);
    }
}
```

- The Auth Server accepts login credentials (username and password), authenticates the user (in this case, we assume successful authentication), and generates a JWT token.
- The token includes the user's roles (`ROLE_USER` in this example).

---

## **Step 4: Expense Microservice - Security Configuration and JWT Token Validation**

The **Expense Microservice** needs to validate JWT tokens and restrict access based on roles.

### **File: `SecurityConfig.java` (Expense Microservice)**

```java
package com.inn.expense_microservice.config;

import com.inn.auth_server_exp.utils.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .addFilter(new JwtAuthenticationFilter(jwtTokenProvider))  // Add JWT filter for validation
            .authorizeRequests()
                .antMatchers("/expenses").hasRole("USER")  // Only allow 'USER' role to access /expenses
                .anyRequest().authenticated()  // All other requests require authentication
            .and()
            .csrf().disable();  // Disable CSRF for stateless API
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // You can configure custom authentication manager if necessary
    }
}
```

### **File: `JwtAuthenticationFilter.java` (Expense Microservice)**

```java
package com.inn.expense_microservice.security;

import com.inn.auth_server_exp.utils.JwtTokenProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.security.core.context.SecurityContextHolder;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtTokenProvider jwtTokenProvider;

    public JwtAuthenticationFilter(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String token = resolveToken(request);

        if (token != null && jwtTokenProvider.validateToken(token)) {
            UsernamePasswordAuthenticationToken authentication = jwtTokenProvider.getAuthentication(token);
            authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        filterChain.doFilter(request, response);
    }

    private String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}
```

### **Explanation of the Filters:**
- **`JwtAuthenticationFilter`** extracts the JWT token from the request's `Authorization` header.
- **`JwtTokenProvider`** is used to validate the token and set the `SecurityContextHolder` with the

 authenticated user.

---

## **Step 5: Angular - Sending JWT Token with Requests**

### **File: `auth.service.ts` (Angular)**

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth/login';  // Auth Server URL

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }

  // Get JWT Token from LocalStorage
  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  // Set JWT Token to LocalStorage
  setToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  // Create HTTP headers with JWT Token
  createAuthorizationHeader() {
    let token = this.getToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
}
```

### **Usage Example in Angular Service for Expense Microservice Call:**

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private apiUrl = 'http://localhost:8081/expenses';  // Expense Microservice URL

  constructor(private http: HttpClient, private authService: AuthService) { }

  getExpenses() {
    return this.http.get(this.apiUrl, { headers: this.authService.createAuthorizationHeader() });
  }
}
```

---

## **Conclusion**

This solution covers:
- JWT Token generation and validation.
- Auth Server for login and JWT generation.
- Expense Microservice for JWT validation and role-based access control.
- Angular application to interact with both services and send JWT tokens in requests.

You can further refine it by adding more details like role-based filtering, error handling, and logging for a production-ready setup.