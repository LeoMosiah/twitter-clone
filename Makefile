install:
	npm install
	cd functions
	npm install

deploy:
	npm run build
	@npx firebase deploy --token ${FIREBASE_DEPLOY_TOKEN}
