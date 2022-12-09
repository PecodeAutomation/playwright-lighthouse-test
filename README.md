## Getting Started

To get you started you can simply clone the playwright-lighthouse-test repository and install the dependencies:

### Prerequisites

You need git to clone the playwright-lighthouse-test repository. You can get it from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test playwright-lighthouse-test. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone playwright-lighthouse-test

Clone the playwright-lighthouse-test repository using [git][git]:

```
git clone https://github.com/PecodeAutomation/playwright-lighthouse-test
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].

Install Node.js and then:

```
npm install
```

### Run the Application
```
"pw:headed": "npx playwright test",
```