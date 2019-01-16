install:
	npm install

deploy:
	npm run build
	cd functions
	npm install
	cd ../
	@npx firebase deploy --token ${FIREBASE_DEPLOY_TOKEN}