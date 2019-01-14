install:
	npm ci

deploy:
	npm run build
	@npx firebase deploy --token ${FIREBASE_DEPLOY_TOKEN}