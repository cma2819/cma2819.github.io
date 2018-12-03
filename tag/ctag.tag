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
      li {
        display: inline-block;
        font-weight: bold;
        margin:0px 5px;
      }
      a, a:hover, a:visited {
        color: #dddddd;
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

      route(async function(tagName) {
        tagName = tagName || 'profile';
        //await $('div#content').animateCss('fadeOutRight');
        await riot.mount('div#content', tagName);
      });

      route.start(true);
  </script>
</menu>

<profile>
  <h1>Cma</h1>
  <dl>
    <p>ゼルダの伝説　時のオカリナをメインにRTAをしています。</p>
    <p>RTA in Japanをはじめとした、オフラインイベントにも複数回参加。</p>
    <p>RTA歴は2012年から6年ほど。</p>
  </dl>
</profile>


<speedrun>
    <h1>Speedrun</h1>
    <dl>
      <p>ゼルダの伝説　時のオカリナをメインにRTAをしています。</p>
      <p>RTA in Japanをはじめとした、オフラインイベントにも複数回参加。</p>
      <p>RTA歴は</p>
    </dl>
</speedrun>
