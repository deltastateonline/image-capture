// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)

// Init Page Components
Vue.component('page-images', {
  template: '#page-images'
});
Vue.component('page-thanku', {
  template: '#page-thanku'
});
Vue.component('page-sorry', {
  template: '#page-sorry'
});

// Init App
new Vue({
  el: '#app',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app', // App root element
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes: [
      {
        path: '/images/',
        component: 'page-images'
      },
	  {
        path: '/thanku/',
        component: 'page-thanku'
      },
	  {
        path: '/sorry/',
        component: 'page-sorry'
      },
     
      {
        path: '(.*)',
        component: 'page-not-found',
      },
    ]	
  },
  data:{
		page:{
			yourInsurer:"Allianz Australia Brisbane",
			claimNumber:"1420122327",
			policyNumber:"142A067999CMP",
			regoNumber:"WLL829",
			regoState:"SA",
			make:"HOLDEN",
			model:"CALAIS"
			
		}
		
		
	}
});