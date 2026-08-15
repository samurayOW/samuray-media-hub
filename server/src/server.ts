import { env } from './config/env.js';
import { app } from './app.js';

app.listen(env.PORT, () => {
  console.info(`Server listening on port ${env.PORT}`);
});
