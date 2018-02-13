// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)

// Init Page Components
Vue.component('page-images', {
  template: '#page-images',
  data(){
	  return {
		imagesList:[
			{photoTitle:'Registration Plate', overlayUrl:'/images/overlays/registration_plate.svg', overlayScale: '1'},
			{photoTitle:'Odometer', overlayUrl:'/images/overlays/odometer.svg', overlayScale: '1'},
			{photoTitle:'Front Left', overlayUrl:'/images/overlays/sedan_front_left.svg', overlayScale: '1.5'},
			{photoTitle:'Front Right', overlayUrl:'/images/overlays/sedan_front_right.svg', overlayScale: '1.5'},
			{photoTitle:'Rear Left', overlayUrl:'/images/overlays/sedan_rear_left.svg', overlayScale: '1.3'},
			{photoTitle:'Rear Right', overlayUrl:'/images/overlays/sedan_rear_right.svg', overlayScale: '1.3'}  
		  ]
	  }
  }
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