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

console.log("\nFeching data, please wait...\n\n")

getLatestRelease()
    .catch(() => console.log('error occured'))
    .then(release => {

        if (release["status"] === 200) {

            console.log('Total download count of \u001b[36m' +
                getAssetDownloadName(release) + '\u001b[0m is \u001b[33m' +
                getAssetDownloadCount(release) + '\u001b[0m')

        }

        console.log("\n\n")

    })