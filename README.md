# The Tiny Project

The tiniest web components framework in the world

## How to use it

- Create an empty folder and open it up in VS Code.
- Run `npm init -y && npm i -D parcel && npm i the-tiny-project`
- In the `scripts` section inside `package.json`, add both `"start": "parcel index.html"` and `"build": "parcel build index.html"`
- Create a file called `index.html`
- Inside `index.html`, type `!` and press enter, which should produce an HTML boilerplate.
- Now create a file called `my-component.ts`
- For better CSS and HTML highlighting support, try installing the following extensions:
- Open `my-component.ts` and edit it to be:

```

```

- Inside `index.html` in the `body` section, add the following two lines:

```
<my-component text="Hello World"></my-component>
<script src="my-component.ts" type="module"></script>
```

- Run `npm start` and open `http://localhost:1234/` in your browser.
- Happy hacking!
