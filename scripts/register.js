///create a constructor
//email, password, first name, last name, age, grade 101, grade 102, grade 103

function Student(email,password,firstName,lastName,age, grade101,grade102,grade103){
    this.email=email;
    this.password=password;
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.grade101=grade101;
    this.grade102=grade102;
    this.grade103=grade103;
}

function register(){
    //get the values from the inputs
        // document = HTML
        //document.get....

    let inputEmail = document.getElementById("txtEmail").value;
    let inputPassword = document.getElementById("txtPassword").value;
    let inputFirstName = document.getElementById("txtFirstName").value;
    let inputLastName = document.getElementById("txtLastName").value;

    console.log(inputEmail,inputPassword,inputFirstName,inputLastName);

    //create the new object
        //** use the constructer */

    let newStudent = new Student(inputEmail,inputPassword,inputFirstName,inputLastName);
    //display the obj into the array
        //** console */
    console.log(newStudent);
}
