install:
	npm install

deploy:
	npm run build
	@npx firebase deploy --only hosting --token ${FIREBASE_DEPLOY_TOKEN}
