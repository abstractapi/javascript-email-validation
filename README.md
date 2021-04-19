# AbstractAPI javascript-email-validation library

Integrate the powerful [email validation API from Abstract](https://www.abstractapi.com/email-verification-validation-api) in your Javascript or NodeJS project in a few lines of code.

Abstract's Email Validation and Verification API is a fast, lightweight, modern, and RESTful JSON API for determining the validity and other details of email addresses.

It's very simple to use: you only need to submit your API key and an email address, and the API will respond an assessment of its validity, as well as additional details like quality score if it's a disposable email, a catchall address, and more.

Validating and verifying email addresses is a critical step to reducing the chances of low-quality data and fraudulent or risky users in your website or application.

# Documentation

## Installation

You can install **javascript-email-validation** via npm, from our CDN, or download the source into your project.

### ES6

Download and install the library from npm:

```
npm install @abstractapi/javascript-email-validation --save
```

In your project, import it and configure your `API_KEY`:

```js
import {AbstractEmailValidation} from 'javascript-email-validation'

AbstractEmailValidation.configure('API_KEY')
```

### Browser, from the CDN

You can have the browser download the library from its closest location through jsDeliver CDN:

```js
<script src="https://cdn.jsdelivr.net/npm/@abstractapi/javascript-core@latest/dist/javascript-core.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@abstractapi/javascript-email-validation@latest/dist/javascript-email-validation.js"></script>
<script>
    AbstractEmailValidation.configure('API_KEY');

    // use the library
</script>
```

### Browser, from the built file

You can build the library yourself, or get the already built file from the `dist` directory and load it:

```js
<script src="dist/javascript-email-validation.js"></script>
<script>
    AbstractEmailValidation.configure('API_KEY');

    // use the library
</script>
```

## API key

Get your API key for free and without hassle from the [Abstact website](https://app.abstractapi.com/users/signup?target=/api/email-validation/pricing/select).

## Quickstart

AbstractAPI **javascript-email-validation** library returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) so you can use one of the following approaches:

### Async/Await

```js
async function validateEmail(email) {
  let response = await AbstractEmailValidation.verify(email);
  console.log(response);
}
```

### Using .then()

```js
function validateEmail(email) {
  AbstractEmailValidation.verify(email)
    .then(response => {
      console.log(response);
    })
}
```

## API response

The API response contains the following fields:

| PARAMETER | TYPE | DETAILS |
| - | - | - |
| email | String | The value for "email" that was entered into the request. |
| auto_correct | String | If a typo has been detected then this parameter returns a suggestion of the correct email (e.g., johnsmith@gmial.com => johnsmith@gmail.com). If no typo is detected then this is empty. |
| deliverability | String | Abstract's evaluation of the deliverability of the email. Possible values are: DELIVERABLE, UNDELIVERABLE, RISKY, and UNKNOWN |
| quality_score | Number | An internal decimal score between 0.01 and 0.99 reflecting Abstract's confidence in the quality and deliverability of the submitted email. |
| is_valid_format | Boolean | Is true if the email follows the format of "address @ domain . TLD". If any of those elements are missing or if they contain extra or incorrect special characters, then it returns false. |
| is_free_email | Boolean | Is true if the email's domain is found among Abstract's list of free email providers (e.g., Gmail, Yahoo, etc). |
| is_disposable_email | Boolean | Is true if the email's domain is found among Abstract's list of disposable email providers (e.g., Mailinator, Yopmail, etc). |
| is_role_email | Boolean | Is true if the email's local part (e.g., the "to" part) appears to be for a role rather than individual. Examples of this include "team@", "sales@", info@", etc. |
| is_catchall_email | Boolean | Is true if the domain is configured to catch all email. |
| is_mx_found | Boolean | Is true if MX Records for the domain can be found. Only available on paid plans. Will return null and UNKNOWN on free plans. |
| is_smtp_valid | Boolean | Is true is the SMTP check of the domain was successful. Only available on paid plans. Will return null and UNKNOWN on free plans. |

## Detailed documentation

You will find additional information and request examples in the [Abstract help page](https://app.abstractapi.com/api/email-validation/documentation).

## Getting help

If you need help installing or using the library, please contact [Abstract's Support](https://app.abstractapi.com/api/email-validation/support).

For bug report and feature suggestion, please use [this repository issues page](https://github.com/abstractapi/javascript-email-validation/issues).

# Contribution

Contributions are always welcome, as they improve the quality of the libraries we provide to the community.

Please provide your changes covered by the appropriate unit tests, and post them in the [pull requests page](https://github.com/abstractapi/javascript-email-validation/pulls).

## NPM

### Installation

Run `npm install` in the command line to install the dependencies. To update those dependencies you need to run `npm update`.

### Building

To build the library and generate the minified file in the *dist* directory, you need to run `npm run build`.

To build the lib, you need to run `npm run build:lib`.

### Test

To run the test suite, you need to run: `npm run test`.

