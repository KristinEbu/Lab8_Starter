# Lab 8 - Starter

1. I would fit the automated tests within a Github action that runs whenever code is pushed. This way this ensures continuous integration and also since the Recipes project is being run through Github pages, even if we run the tests locally before pushing the code, this doesn't ensure it works on Github pages.
2. No
3. No, the "message" feature involves many different components/moving parts that should be tested before.
4. Yes, because the "max message length" is a component that's not considered a "moving part." It's a simple component that doesn't rely on anything else and can be tested separately.