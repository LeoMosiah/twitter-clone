install:
	npm install

deploy:
	npm run build
	npx firebase deploy --token ${FIREBASE_DEPLOY_TOKEN}