# Simple Val Form Validation

A simple jQuery include for validating your forms before submit.

## Getting Started

Just link to the simpleval.js file from your page with your form. Creating required fields is a breeze...

### Installing and Using

```
Include the simpleval.js file at the end of your <body> tag after you include your desired jQuery library file
<script src="PATH_TO_FOLDER/simpleval.js"></script>
```
In your HTML form code, simply add the class="required" to any field that you wish to require. Validation will be done on all fields simultaneously.
```
Form is tied to jQuery .submit(), so if you wish to tie any ajax to submission, use that hook.
```

* The class="form-error" is added to fields that do not validate. You will want to create your own styles for this class.
```
Classes to add for custom masking and validation:
"ccnum" = Credit Card Number (1111-1111-1111-1111)
"ccexp" = Credit Card Expiration Date (12/1234)
"money" = Money Amounts ($00.00)

Telephone fields (input type="tel") are auto-masked.
```

## Authors

* **Travis Wachendorf** - [Midwestern Analog](https://github.com/magnifiedman)

## License

This project is licensed under the GNU General Public License.
