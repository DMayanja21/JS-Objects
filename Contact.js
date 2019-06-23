//Alternative
function Contact(first_name,second_name,phone_number,email,address_array){
	this.first_name=first_name;
	this.second_name=second_name;
	this.phone_number=phone_number;
	this.email=email;
	this.address=[address_array[0]="street",address_array[1]="city",address_array[2]="country"];
}

//Objects:
var danny=new Contact("Daniel","Mutumbo","0778842365","danmuts@gmail.com",["Prince Charles Lane","Kampala","Uganda"]);
var jack= new Contact("Jack","Black","0702563627","jackblk@yahoo.co.uk",["Union Road","Kampala","Uganda"]);
/*function Contact(first_name,second_name,phone_number,email,address){
	this.first_name=first_name;
	this.second_name=second_name;
	this.phone_number=phone_number;
	this.email=email;
	this.address=Address;
}
var Address={
	street:"Lumumba Avenue",
	city:"Kampala",
	country:"Uganda",
}

//Objects:
var danny=new Contact("Daniel","Mutumbo","0778842365","danmuts@gmail.com",Address);
var jack= new Contact("Jack","Black","0702563627","jackblk@yahoo.co.uk",Address);*/

Contact.prototype.fullName=function(){
	return this.first_name+","+this.second_name;
}