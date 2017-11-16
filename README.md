# Simple Val Form Validation

A simple jQuery include for validating your forms before submit.

## Getting Started

Just link to the simpleval.js file from your page with your form. Creating required fields is a breeze...

### Installing and Using

```
Include the simpleval.js file at the end of your <body> tag after you include your desired jQuery library file
<script src="PATH_TO_FOLDER/simpleval.js"</script>
```
In your HTML form code, simply add the class="required" to any field that you wish to require. Validation will be done on all fields simultaneously.
```
Form is tied to jQuery .submit(), so if you wish to tie any ajax to submission, use that hook.
```

The class="form-error" is added to fields that do not validate. You will want to create your own styles for this class.
```
```

## Authors

* **Travis Wachendorf** - [Midwestern Analog](https://github.com/magnifiedman)

## License

This project is licensed under the GNU General Public License.
