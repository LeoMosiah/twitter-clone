install:
	npm install

deployHosting:
	npm run build
	@npx firebase deploy --only hosting --token ${FIREBASE_DEPLOY_TOKEN}

deployFunctions:
    cd functions
    npm install
    @npx firebase deploy --only functions