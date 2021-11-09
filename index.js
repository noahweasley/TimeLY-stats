const {
    Octokit
} = require('octokit')

// Create a personal access token to use with Octokit
const octokit = new Octokit()

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

console.log("\n Feching data, please wait...\n\n")

getLatestRelease()
    .then(release => {

        if (release["status"] === 200) {

            console.log(`   Total download count of \n
            ${getAssetDownloadName(release)} is ${getAssetDownloadCount(release)}`)

        }

    }).catch(() => console.log('An Error occured, exiting...\n'))