install:
	npm install

hosting:
	npm run build
	@npx firebase deploy --only hosting --token ${FIREBASE_DEPLOY_TOKEN}

functions:
	cd functions
	npm install
	@npx firebase deploy --only functions