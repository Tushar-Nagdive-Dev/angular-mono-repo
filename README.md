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