"use strict";
class College {
    collegeName;
    fee;
    principal;
    constructor(name, fee, principal) {
        this.collegeName = name;
        this.fee = fee;
        this.principal = principal;
    }
    showDetails() {
        console.log("College:", this.collegeName);
        console.log("Fee:", this.fee);
        console.log("Principal:", this.principal);
    }
}
const college = new College("SVECW", 120000, "Dr. SriKrishna");
college.showDetails();
