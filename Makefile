install:
	npm install
	cd functions
	npm install
	cd ../

deploy:
	npm run build
	@npx firebase deploy --only hosting --token ${FIREBASE_DEPLOY_TOKEN}
