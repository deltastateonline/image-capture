// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)

window.Event = new Vue();

// Init Page Components
var pageImages = Vue.component('page-images', {
  template: '#page-images',
  data(){
	  return {
		processing : false,
		imagesList:[
			{photoTitle:'Registration Plate', overlayUrl:'/images/overlays/registration_plate.svg', overlayScale: '1'},
			{photoTitle:'Odometer', overlayUrl:'/images/overlays/odometer.svg', overlayScale: '1'},
			{photoTitle:'Front Left', overlayUrl:'/images/overlays/sedan_front_left.svg', overlayScale: '1.5'},
			{photoTitle:'Front Right', overlayUrl:'/images/overlays/sedan_front_right.svg', overlayScale: '1.5'},
			{photoTitle:'Rear Left', overlayUrl:'/images/overlays/sedan_rear_left.svg', overlayScale: '1.3'},
			{photoTitle:'Rear Right', overlayUrl:'/images/overlays/sedan_rear_right.svg', overlayScale: '1.3'},
			{photoTitle:'Add More', overlayUrl:'/images/add.more.png', overlayScale: '1.3',lastImage:true} 			
		  ],
		imagesAdded:[]
	  }
  },
  methods:{
	fileUploaded(anImage, el){		
		
		var self = this;
		self.processing = true;
		var eTarget = el.target;
		if(eTarget.files && eTarget.files[0]){			
			var file = eTarget.files[0]
			var reader = new FileReader();
			reader.onloadend = function() {
				 anImage.overlayUrl = reader.result;
				 
				 if(anImage.lastImage != undefined && anImage.lastImage){	
				 anImage.lastImage = false;
					 self.imagesList.push(
						{photoTitle:'Add More', overlayUrl:'/images/add.more.png', overlayScale: '1.3',lastImage:true}
					 );				
				 }
				self.imagesAdded.push(1);
				self.processing = false;
			}
			reader.readAsDataURL(file);
			
		}
		
	}
  },
  created(){
		
		
		Event.$on('lastuploaded',function(){
		  console.log(pageImages.$data);
		  /*pageImages.options.data().push(
			 {photoTitle:'Add More', overlayUrl:'/images/add.more.png', overlayScale: '1.3',lastImage:true}
		  );*/
		})
		
  },
  computed:{
		
		imageCount(){
			//return "#"+this.name.toLowerCase().replace(/ /g,'-');
			return this.imagesAdded.length;
		}
		
	}
  
  
});

// use slots to add content to 
Vue.component('an-image',{
	
	template:'<div ><slot></slot></div>'
	,
	props:{		
		photoTitle: {required:true},
		overlayUrl: {required:true},		
	},
	data(){
		return {
			overlayUrl:"",
			photoTitle:"",
		}
	},
	methods:{
		
	},
  created(){
	  
	  Event.$on('uploaded',function(el){
		  
		 // console.log(el);
		 // console.log("Here Now");
		 // console.log(this);
	  })	  
  }
});


Vue.component('page-thanku', {
  template: '#page-thanku',
  data(){
	  return {
		  refNumber : "REQ2018-0000001"
	  }
  },
  computed:{
	  
	newRefNumber(){
		var d = new Date();
		return "RFI-"+d.getFullYear()+""+d.getMonth()+""+d.getDate()+""+d.getMilliseconds();
	}	
  }
});
Vue.component('page-sorry', {
  template: '#page-sorry'
});

// Init App
var app = new Vue({
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
			
		},
		claimRequest:{
			claimKey:"",			
		}
		
		
	},
	mounted(){
		var claimKey = window.location.hash;
		
		this.claimRequest.claimKey = claimKey.substr(1);
		var x = function makeAjax(hashValue){
			console.log(hashValue)
		};
		x(this.claimRequest.claimKey);		
	},
	methods: {
		onF7Ready(f7) {
		  // do some f7 related logic
		  //f7.dialog.alert('App initialized');
		  //console.log(f7);
		  /*
		  f7.request.get('blog-post.php', { foo:'bar', id:5 }, function (data) {			 
			  console.log('Load was performed');
		  });*/
		  
		}
	}
});