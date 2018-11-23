new Vue({
	el: "#vue-app",
	data:{
		name : "Adeyefa Oluwatoba Adegoke",
		job : "Software Engineer",
		stack : "NodeJS, MongoDB, Express, VueJS, Java",
		website: "http://www.9jatechguru.com.ng",
		websiteTag: '<a href="http://www.9jatechguru.com.ng">9jatechguru Blog </a>',
		age: 19,
		x: 0,
		y: 0,
		a: 0,
		b: 0,
		yName: "",
		available: false,
		nearby: false
	},
	methods: {
		greet : function (time) {
			return "Good " + time +" " + this.name;
			// body...
		},
		add : function(inc){
			this.age += inc;
		},
		subtract : function(dec){
			this.age -= dec;
		},
		updateXY : function(event){
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		click : function(){
			alert("You clicked me");
		},
		logName : function(){
			console.log("You Entered Your Name");
		},
		logAge : function(){
			console.log("You Entered Your Age");
		},
	},
	computed: {
		addToA: function(){
			console.log("AddToA");
			return this.a + this.age;
		},
		addToB : function(){
			console.log("AddToB");
			return this.b + this.age;
		},
		compClasses : function(){
			return {
				available: this.available,
				nearby: this.nearby
			}
		}
	}
});