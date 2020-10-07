const simpleGit = require('simple-git');
const git = simpleGit();
async function gitClone(){
  try {
    console.log('calling gitClone')
    const repoPath = 'https://github.com/bearni95/dice-guardians-builds.git'
    const localPath = './resources/app/www'
    await git.clone(repoPath, localPath)

  } catch (e){
    console.error(e)
  }
}

gitClone()
