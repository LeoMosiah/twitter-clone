install:
	npm install

deploy:
	npm run build
	@npm firebase deploy --token ${FIREBASE_DEPLOY_TOKEN}