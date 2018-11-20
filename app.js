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
		yName: ""
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
	}
});