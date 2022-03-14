let rpc = require("discord-rpc")
require('date-utils')
let activityJson = require("./activity.json")

const client = new rpc.Client({transport:'ipc'})
client.on("ready", async () => {
    console.log('ログイン中のユーザー', client.user.username)
    activityJson.activity.startTimestamp = new Date()
    client.setActivity(activityJson.activity)
})

client.login({clientId:activityJson.applicationId}).catch(console.error);