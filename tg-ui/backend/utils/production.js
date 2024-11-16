import createDebug from 'debug';

const debug = createDebug('bot:dev');

const PORT = (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000;
export const VERCEL_URL = "https://roomzy-876.vercel.app/api/v1/bot";

const production = async (
  req,
  res,
  bot,
) => {
  debug('Bot runs in production mode');
  debug(`setting webhook: ${VERCEL_URL}`);

  if (!VERCEL_URL) {
    throw new Error('VERCEL_URL is not set.');
  }

  console.log(VERCEL_URL,PORT)

  const getWebhookInfo = await bot.telegram.getWebhookInfo();
  if (getWebhookInfo.url !== VERCEL_URL) {
    debug(`deleting webhook ${VERCEL_URL}`);
    await bot.telegram.deleteWebhook();
    debug(`setting webhook: ${VERCEL_URL}`);
    await bot.telegram.setWebhook(VERCEL_URL);
  }

  if (req.method === 'POST') {
    debug(`method${req.method}`);
    debug(`body ${req.body}`);
    await bot.handleUpdate(req.body, res);
  } else {
    debug(`method${req.method}`);
    debug(`body ${req.body}`);
    res.status(200).json('Listening to bot events...');
  }
  debug(`starting webhook on port: ${PORT}`);
};

export { production };
