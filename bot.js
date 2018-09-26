const Discord = require('discord.js');
const breezely = new Discord.Client();

console.log("BOT ONLINE");
 
breezely.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

‏نقدم لك دعوة لسموك الراقيَ .
‏لنحظى بجمال حضورك وتواجدك
•بتنـورونـا الجميع :wink:

ل محبي ماينكرافت 

اتمنى تدخل هاذا الديسكورد 

ديسكورد تابع ل سيرفر ماينكرافت 

جديد و رائع 

حاب تعرف تفاصيل 

او الأيبي و التحديث 

ادخل و اكتب ip 

و اذا عندك مشاكل الأداره ما تقصر 

تشرفنى اذا دخلت

https://discord.gg/86Y5mjQ
الدعووة خاصة لك ي قلبي ...  [ ${member}  ]
                              				
واللي دخل هن طريق هذي الدعوة له عروض خاصة 
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
