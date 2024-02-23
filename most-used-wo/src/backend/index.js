const { ipcMain } = require("electron")

const pathToRows = require("./pathsToRows")
const preparedData = require("./preparedData")
const groupWords = require("./groupWords")

ipcMain.on("process-subtitles", (event, paths) => {
    pathToRows(paths)
    .then(rows => preparedData(rows))
    .then(preparedData => groupWords(preparedData))
    .then(groupedWords => {
        event.reply("process-subtitles", groupedWords)
    })    
})