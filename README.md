# DjangoReact

# django-project
##### dark mode
<img src="https://i.ibb.co/T2N7nmq/Screenshot-from-2020-05-22-11-07-53.png" alt="Screenshot-from-2020-05-22-11-07-53" border="0">
<img src="https://i.ibb.co/xq2xGXn/Screenshot-from-2020-05-22-11-07-57.png" alt="Screenshot-from-2020-05-22-11-07-57" border="0">
<img src="https://i.ibb.co/gSxJX0Z/Screenshot-from-2020-05-22-11-08-00.png" alt="Screenshot-from-2020-05-22-11-08-00" border="0">
<a href="https://ibb.co/6HzYNwr"><img src="https://i.ibb.co/k4jKMB5/Screenshot-from-2020-04-21-19-44-42.png" alt="Screenshot-from-2020-04-21-19-44-42" border="0"></a>
<a href="https://ibb.co/PTWYyqg"><img src="https://i.ibb.co/GsMJDzR/Screenshot-from-2020-04-21-19-45-04.png" alt="Screenshot-from-2020-04-21-19-45-04" border="0"></a>
<a href="https://ibb.co/KL5GCZj"><img src="https://i.ibb.co/rcQtnPG/Screenshot-from-2020-04-21-19-45-50.png" alt="Screenshot-from-2020-04-21-19-45-50" border="0"></a>
<a href="https://ibb.co/4ggg13q"><img src="https://i.ibb.co/jZZZJsN/Screenshot-from-2020-04-21-19-46-13.png" alt="Screenshot-from-2020-04-21-19-46-13" border="0"></a>

### Install Django:
```bash
pip install Django
```

### Perform database migration:
```bash
python manage.py check
python manage.py migrate
```

## Run Development Server

```bash
python manage.py runserver
```
Public endpoint is at http://localhost:8000/api/

Admin endpoint is at http://127.0.0.1:8000/admin/, `user: admin`, `password: qazwsxedc`

## Testing

### Run tests:
```bash
python manage.py test
```

```bash
Creating test database for alias 'default'...
System check identified no issues (0 silenced).
..........
----------------------------------------------------------------------
Ran 10 tests in 0.025s

OK
Destroying test database for alias 'default'...
```

### Run tests with coverage:
```bash
pip install coverage
coverage run --source='.' manage.py test
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
