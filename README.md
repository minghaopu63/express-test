1. npm i
2. npm run build
3. npm start
4. visit http://localhost:3000/abcd


If you change the `TOTAL_NUMBER_MIDDLEWARES` in `generate-middlewares` to less than 100, it will work.
http://localhost:3000/abcd will show 'Hello world'

If you change the `TOTAL_NUMBER_MIDDLEWARES`in `generate-middlewares.js` to equal or larger than 100, it will not work.
http://localhost:3000/abcd will time out
