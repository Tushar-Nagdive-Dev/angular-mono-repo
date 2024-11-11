# AngularMonorepoWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out cert.pem

for https url

To implement HTTPS in your Angular development server, you will need to create or obtain an SSL certificate and configure the Angular CLI to use it. Here are the steps to achieve this:

1. Generate or Obtain an SSL Certificate
You can use a self-signed certificate for development purposes. Use OpenSSL to generate the certificate and key files:

bash
openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out cert.pem
This command will create two files: key.pem (the private key) and cert.pem (the certificate).

2. Configure Angular CLI to Use HTTPS
Update your angular.json file to include the SSL configuration. Add the ssl, sslKey, and sslCert options to the serve configuration:

json
{
  "projects": {
    "your-app-name": {
      "architect": {
        "serve": {
          "options": {
            "ssl": true,
            "sslKey": "path/to/key.pem",
            "sslCert": "path/to/cert.pem"
          }
        }
      }
    }
  }
}
Replace "your-app-name" with the actual name of your Angular project, and update the paths to your key and certificate files.

3. Start the Angular Development Server
Run the Angular development server with the --ssl flag to enable HTTPS:

bash
ng serve --ssl --ssl-key path/to/key.pem --ssl-cert path/to/cert.pem
4. Access Your Application Over HTTPS
Open a web browser and navigate to https://localhost:4200 (or the port your Angular CLI server is running on). If you are using a self-signed certificate, your browser may show a warning; you can usually proceed by accepting the certificate.

With these steps, your Angular development server will be configured to use HTTPS, providing a secure communication channel for your application.

Feel free to reach out if you have any further questions or run into any issues!


❯ openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out cert.pem

.......+....+......+++++++++++++++++++++++++++++++++++++++*....................+++++++++++++++++++++++++++++++++++++++*......+............+...+....+.....+..........+......+..+...+.......+...+......+...+..+....+.....+................+..............++++++
....+.................+......+++++++++++++++++++++++++++++++++++++++*....+.+........+.........+.+..+....+...+...+..+.......+....................+......+.......+.....+.+............+..+...+++++++++++++++++++++++++++++++++++++++*..+......+............+..............+...+...+.......+.....+............+...+.......+..............+................+.....++++++
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:IN
State or Province Name (full name) [Some-State]:Tushar Nagdive
Locality Name (eg, city) []:Indore
Organization Name (eg, company) [Internet Widgits Pty Ltd]:expense
Organizational Unit Name (eg, section) []:expense
Common Name (e.g. server FQDN or YOUR name) []:expense
Email Address []:tushar79990@gmail.com

ng serve expenses-mgmt --ssl --ssl-key key.pem --ssl-cert cert.pem --port=4201
