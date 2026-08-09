class College {
    public collegeName: string;
    private fee: number;
    protected principal: string;

    constructor(name: string, fee: number, principal: string) {
        this.collegeName = name;
        this.fee = fee;
        this.principal = principal;
    }

    showDetails(): void {
        console.log("College:", this.collegeName);
        console.log("Fee:", this.fee);
        console.log("Principal:", this.principal);
    }
}

const college = new College("SVECW", 120000, "Dr. SriKrishna");
college.showDetails();