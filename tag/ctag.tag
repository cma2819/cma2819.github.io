<content>
  <script>
    this.on('before-unmount', async () => {
      $('div#content').animateCss('fadeOutRight');
    });
    this.on('mount', async () => {
      $('div#content').animateCss('fadeInRight');
    });
  </script>
</content>


<menu>
  <ul class="animated fadeIn">
    <li each={list}><a href="javascript:void(0)" onclick="linkTo('{link}')">{title}</a></li>
  </ul>


  <style>
    :scope {
      display: inline-block;
    }
    menu {
      margin:0px;
    }

    li {
      display: inline-block;
      font-weight: bold;
      margin: 0px 5px;
    }

    a,
    a:visited {
      color: #dddddd;
      transition: color 0.5s;
      text-decoration: none;
    }

    a:hover {
      color: #ffffff;
    }
  </style>
  <script>
    this.list = [
      {
        title: 'Profile',
        link: 'profile'
      },
      {
        title: 'Speedrun',
        link: 'speedrun'
      },
      {
        title: 'Engineering',
        link: 'engineer'
      },
    ];

    route(async function (tagName) {
      tagName = tagName || 'profile';
      //await $('div#content').animateCss('fadeOutRight');
      await riot.mount('div#content', tagName);
    });

    route.start(true);
  </script>
</menu>

<profile>
  <h1>Profile - プロフィール</h1>
  <dl>
    <dt>Speedrun</dt>
    <dd>ゼルダの伝説時のオカリナ（2012年～）</dd>
    <dt>Enginnering</dt>
    <dd>Python3, Java, Node.js(NodeCG), HTML, CSS3, JavaScript</dd>
    <dt>Links</dt>
    <dd><a href="https://rtachecker.herokuapp.com/" target="_blank">RTAChecker</a></dd>
    <dd><a href="https://www.speedrun.com/user/Cma" target="_blank">Speedrun.com</a></dd>
    <dd><a href="http://amzn.asia/6B7IqgW" target="_blank">ほしいものリスト</a></dd>
  </dl>
</profile>


<speedrun>
  <h1>Speedrun - RTA</h1>
  <dl>
    <p>ゼルダの伝説　時のオカリナをメインにRTAをしています。</p>
    <dt>Planning - 今後の予定</dt>
    <dd><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTh2N6oi1MQYdhZBV5mgxkqgtaQbRE51Oos0IWb_ch0searwbBxbN83raPL6-_a4YHE7fikck8M0DdD/embed?start=false&loop=false&delayms=3000"
        frameborder="0" width="720" height="434" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></dd>
    <dt>Events - イベント出場歴</dt>
    <dd><a href="https://youtu.be/hxrW5xRA1W0" target="_blank">時のオカリナ MST</a> at「RTA in Japan」(2016/12/28～2016/12/30)</dd>
    <dd><a href="https://youtu.be/JNgSDc0bQN0" target="_blank">時のオカリナ RDO</a> at「RTA in Japan2」(2017/12/27～2017/12/31)</dd>
    <dd><a href="https://youtu.be/ashK0s4cUME" target="_blank">時のオカリナ No IM/WWの解説</a> at「RTA in
      Japan2」(2017/12/27～2017/12/31)</dd>
    <dd><a href="https://www.twitch.tv/videos/325118647" target="_blank">【とよまな企画】とよまなのRTA解体ショー#1（ゲスト）</a>(2018/10/21)</dd>
    <dd>時のオカリナ ノーマルビンゴ</a> at「C4RUN RTAリレー」(2018/12/08)</dd>
  </dl>
</speedrun>

<engineer>
  <h1>Engineering - 開発</h1>
  <dl>
    <dt><a href="https://rtachecker.herokuapp.com/" target="_blank">RTAChecker</a></dt>
    <dd>サーバーサイド：Python3(Flask)</dd>
    <dd>フロントサイド：JavaScript, jQuery</dd>
    <dt>配信レイアウト作成</dt>
    <dd>NodeCG（Node.jsを利用したフレームワーク）</dd>
    <dd><a href="https://www.twitch.tv/videos/346087528" target="_blank">C4RUN RTAリレー</a> <a href="https://github.com/cma2819/c4run2018-layout"
        target="_blank">ソースファイル</a></dd>
    <dd>作成のご依頼等はTwitterのDMまで</dd>
    <dt>おしごと</dt>
    <dd>募集中です</dd>
  </dl>
</engineer>