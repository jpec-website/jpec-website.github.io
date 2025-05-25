const fs = require('fs')
const {NodeSSH} = require('node-ssh')
const ssh = new NodeSSH()

const main = async () => {
  console.log('サーバーに接続しています')

  // sshの接続に必要な情報を記述
  await ssh.connect({
    host: 'baker.oroshi.toyoake.or.jp',
    port: 22,
    username: 'toyoake',
    privateKey: fs.readFileSync('/home/toyoake/.ssh/id_ed25519', 'utf8')
  })

  // サーバーに送信する元のディレクトリ、アップロード先のディレクトリ
  const localDirectory = '.output/public/'
  // const serverDirectory = '/home/toyoake/work/docker/docker-uwsgi-emperor-python3.6-8084/app/html/takuhai-manage'
  const serverDirectory = '/var/www/html/jpec'
 
  console.log('サーバーにアップロードしています')
  
  // アップロード(置き換え)
  await ssh.putDirectory(localDirectory, serverDirectory)
  console.log('アップロードに成功しました')
  process.exit()
}

main();