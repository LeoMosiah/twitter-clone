install:
	npm install

deploy-hosting:
	npm run build
	@npx firebase deploy --only hosting --token ${FIREBASE_DEPLOY_TOKEN}

deploy-functions:
    cd functions
    npm install
    @npx firebase deploy --only functions