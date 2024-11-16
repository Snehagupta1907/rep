import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/route.js";
import cors from "cors";
import createDebug from "debug";
import { development } from "./utils/development.js";
import { production } from "./utils/production.js";
import { Telegraf } from "telegraf";

dotenv.config();
const app = express();
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

const debug = createDebug("bot:greeting_text");

const replyToMessage = (ctx, messageId, string) =>
  ctx.reply(string, {
    reply_parameters: { message_id: messageId },
  });

const greeting = () => async (ctx) => {
  try {
    debug('Triggered "greeting" text command');

    const messageId = ctx.message?.message_id;
    const userName = `${ctx.message?.from.first_name} ${ctx.message?.from.last_name}`;
    const text = ctx.message.text;

    console.log(text, messageId, userName, ctx);

    if (messageId) {
      await replyToMessage(ctx, messageId, `Hello, ${userName}!`);
    }
  } catch (error) {
    console.error(error);
    ctx.reply(
      "An error occurred while sending the greeting. Please try again later."
    );
  }
};

// Connect to MongoDB
connectDB();

// Use the imported routes
app.use("/api", router);

const PORT = process.env.PORT || 8000;

const token = process.env.BOT_TOKEN;
const ENVIRONMENT = process.env.NODE_ENV;

console.log(process.env.BOT_TOKEN);

export const web_link = process.env.WEB_APP_LINK;
// const register = process.env.WEB_REGISTER_URL;
// const login = process.env.WEB_LOGIN_URL;
const bot = new Telegraf(token);

bot.start((ctx) =>
  ctx.reply("Welcome to Buzzify", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

// bot.command('generate', generateLink());
// bot.command('review', addReview());

// bot.command("register", (ctx) =>
//   ctx.reply("Hey there, you can register using this", {
//     reply_markup: {
//       inline_keyboard: [[{ text: "Register here", web_app: { url: register } }]],
//     },
//   })
// );

// bot.command("login", (ctx) =>
//   ctx.reply("Hey there, you can login using this", {
//     reply_markup: {
//       inline_keyboard: [[{ text: "Login here", web_app: { url: login } }]],
//     },
//   })
// );

// bot.command("owes", handleOwesCommand());
// bot.command("reward", getReward());

bot.help(async (ctx) =>
  ctx.reply(`
🤖 *Buzzify Bot Help* 🏠

/start - Greet the bot
/chat - Chat with room sharer
/register - Register Web App
/login - Login Web App
/payment - Make a payment @to_whom_your_paying
/profile - View history or earned rewards

Need assistance with anything else? Feel free to reach out! 🚀
`)
);

bot.hears(/hi+|hello+|hey+/, greeting());

// bot.command("payment", paymentUser());

bot.hears("Good Morning", (ctx) => ctx.reply("Hey, Good Morning"));
bot.hears("Namaste", (ctx) => ctx.reply("Namaste ji!"));
bot.hears("Bye", async (ctx) => {
  ctx.reply("Byeee buddy");
});
bot.on("sticker", (ctx) => ctx.reply("👍"));

export const startVercel = async (req, res) => {
  await production(req, res, bot);
};

bot.catch((err, ctx) => {
  console.error(`Error for ${ctx.updateType}`, err);
  ctx.reply("An unexpected error occurred. Please try again later.");
});

// // Development mode
ENVIRONMENT !== "PRODUCTION" && development(bot);

export default async function handle(req, res) {
  try {
    await startVercel(req, res);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Server Error</h1><p>Sorry, there was a problem</p>");
    console.error(e.message);
  }
}

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
