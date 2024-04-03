# Tags Table

**Running the Application**
To run the Tags Table, follow these steps:

```sh

# Clone this repository
$ git clone https://github.com/KlaudiaDabrowska/stackoverflow-tags

# Go into the repository
$ cd stackoverflow-tags

# Install dependencies
$ npm ci

# Add .env.local file based on the .env.example, build and start the app
$ npm run start

# Start the storybook
$ npm run storybook

#Start unit tests
$ npm run test


```

#### Open app in the browser

Open [http://localhost:3000]

---

### Continuous Integration with GitHub Actions

The Tags Table is integrated with GitHub Actions for automated testing. Each time a commit is pushed to the main branch or pull requests are created, the tests are automatically triggered. The GitHub Actions workflow configuration can be found in the repository's .github/workflows directory.
