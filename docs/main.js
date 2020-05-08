window.$docsify = {
    name: 'help-docsify',
    //repo: 'https://github.com/kdashivantha/help',
    search: 'auto',
    coverpage: false,
    loadNavbar: false,
    loadSidebar: true,
    subMaxLevel: 3,
    name: 'KDAS DEV HELP',
    search: {
      noData: {
        '/': 'No results!'
      },
      paths: 'auto',
      placeholder: {
        '/': 'Search'
      }
    },
    plugins: [
      function(hook) {
        var footer = [
          '<footer style="text-align: center;margin-top: 50px;">',
          '<span> KDAS  &copy; 2020 </span>',
          '</footer>'
        ].join('');

        hook.afterEach(function(html) {
          return html + footer;
        });
      }
    ],
    darklightTheme: {
        //siteFont : 'PT Sans | Source Sans Pro',
        defaultTheme : 'dark',
        //codeFontFamily : 'Roboto Mono, Monaco, courier, monospace'
    }
  }