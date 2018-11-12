new Vue({
	el: "#vue-app",
	data:{
		name : "Adeyefa Oluwatoba Adegoke",
		job : "Software Engineer",
		stack : "NodeJS, MongoDB, Express, VueJS, Java",
		website: "http://www.9jatechguru.com.ng",
		websiteTag: '<a href="http://www.9jatechguru.com.ng">9jatechguru Blog </a>'
	},
	methods: {
		greet : function (time) {
			return "Good " + time +" " + this.name;
			// body...
		},
	}
});