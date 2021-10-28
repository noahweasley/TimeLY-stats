const {
    Octokit
} = require('octokit')

// Create a personal access token to use with Octokit
const octokit = new Octokit({
    auth: `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`
})

async function getLatestRelease() {
    return await octokit.request("GET /repos/{owner}/{repo}/releases/latest", {
        owner: 'noahweasley',
        repo: 'TimeLY'
    })
}

function getAssetDownloadCount(release) {
    return release["data"]["assets"][0].download_count
}

function getAssetDownloadName(release) {
    return release["data"]["assets"][0].name
}

console.log("\n\nFeching data, please wait...\n\n")

getLatestRelease()
    .catch(() => console.log('error occured'))
    .then(release => {
        if (release["status"] === 200) {
            console.log(`Total download of ${getAssetDownloadName(release)} is ${getAssetDownloadCount(release)}`)
        }

        console.log("\n\n")
    })