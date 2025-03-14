## Promtior Chatbot client
This is the client for the Promtior Chatbot, using Next.js and Shadcn/UI, Assistant UI and LangChain. 
The live version can be found at [https://gray-cliff-02203150f.6.azurestaticapps.net/](https://gray-cliff-02203150f.6.azurestaticapps.net/)


If you want to run it locally, you need to have the langserve server running. 
You can find the repository of the langserve server [here](https://github.com/TomasVilalta/promtior-challenge)


## Getting Started
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Prerequisites
You'll need to setup the langserve server to run the chatbot. 
Then define a .env file in the root of the project with the LANGSERVE_URL environment variable.

### Running the project
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

