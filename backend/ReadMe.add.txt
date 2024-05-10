first run "npm i" command to install node modules

first step :- connect DATABASE using DATABASE_URL="postgresql://postgres:123456@localhost:5432/studySync?schema=public" or DATABASE_URL="postgresql://<user>:<password>@localhost:5432/<myDb>?schema=public"

second step :- generate migration using command "npx prisma migrate dev --name schemas or npx prisma migrate dev --create-only"

third step :- run on your local server using command "node index.js or nodemon index.js"