import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/models/*.ts',
  dialect: 'mysql',
  dbCredentials: {
    url: "mysql://root:Anshu@2004@localhost:/lms",
  },
});

